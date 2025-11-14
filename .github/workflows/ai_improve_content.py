#!/usr/bin/env python3
"""AI-powered content improvement script for SEO optimization - FIXED VERSION"""

import os
import json
import re
from pathlib import Path
from openai import OpenAI
from github import Github

# Configuration
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN')
ISSUE_NUMBER = int(os.environ.get('ISSUE_NUMBER', 0))
REPO_NAME = os.environ.get('GITHUB_REPOSITORY', 'Andrew821667/legal-ai-website')

client = OpenAI(api_key=OPENAI_API_KEY)
github = Github(GITHUB_TOKEN)
repo = github.get_repo(REPO_NAME)

def get_issue_details(issue_num):
    """Получить детали Issue"""
    issue = repo.get_issue(issue_num)
    return {
        'title': issue.title,
        'body': issue.body,
        'labels': [label.name for label in issue.labels]
    }

def identify_improvement_type(issue):
    """Определить тип улучшения по Issue"""
    title = issue['title'].lower()

    if 'читаемость' in title or 'readability' in title:
        return 'readability'
    elif 'контент' in title and 'объем' in title:
        return 'content_length'
    elif 'доверие' in title or 'trust' in title:
        return 'trust_signals'
    else:
        return 'general'

def improve_component_content(file_path, improvement_type):
    """Улучшить контент в TSX компоненте - ПРАВИЛЬНЫЙ ПОДХОД"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f'📄 Processing: {file_path}')
    print(f'📏 File size: {len(content)} characters')

    # Проверяем что есть текстовый контент для улучшения
    # Ищем строки с русским текстом внутри JSX
    russian_text_pattern = r'>[А-Яа-яЁё\s\-,\.!?]+<|"[А-Яа-яЁё\s\-,\.!?]+"'
    if not re.search(russian_text_pattern, content):
        print(f'⏭️  No Russian text found in {file_path}, skipping')
        return content

    # Формируем промпт для GPT-4
    prompt = f"""Ты — эксперт по SEO-копирайтингу и React/TypeScript. Твоя задача: улучшить ТОЛЬКО ТЕКСТОВЫЙ КОНТЕНТ, полностью сохранив код.

ВАЖНЫЕ ПРАВИЛА:
1. СОХРАНИ ВСЮ структуру JSX/TSX абсолютно неизменной
2. СОХРАНИ все классы Tailwind CSS
3. СОХРАНИ все компоненты, импорты, экспорты
4. СОХРАНИ все переменные, функции, хуки
5. НЕ добавляй комментарии или пояснения

ЧТО УЛУЧШАТЬ:
✅ Русский текст внутри тегов: <h1>ЭТОТ ТЕКСТ</h1>
✅ Русский текст в строках: "ЭТОТ ТЕКСТ"
✅ Контент параграфов, заголовков, кнопок

КАК УЛУЧШАТЬ (в зависимости от типа):
{get_improvement_instructions(improvement_type)}

ЧТО НЕ ТРОГАТЬ:
❌ Код TypeScript/JavaScript
❌ Классы и стили
❌ Структуру компонентов
❌ Английский текст (ссылки, классы, и т.д.)
❌ Числа и статистику (20+, 80%, 4-6 мес)

ИСХОДНЫЙ ФАЙЛ:
```tsx
{content}
```

ВЕРНИ УЛУЧШЕННУЮ ВЕРСИЮ ФАЙЛА ПОЛНОСТЬЮ (без markdown блоков, без пояснений):"""

    try:
        print(f'🤖 Calling GPT-4 to improve {file_path.name}...')

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": "Ты эксперт по SEO-копирайтингу и React/TypeScript. Улучшаешь ТОЛЬКО текстовый контент, сохраняя весь код абсолютно неизменным."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3,  # Низкая температура для точности
            max_tokens=8000
        )

        improved_content = response.choices[0].message.content.strip()

        # Убираем markdown code blocks если GPT их добавил
        if improved_content.startswith('```'):
            lines = improved_content.split('\n')
            # Убираем первую строку (```tsx) и последнюю (```)
            improved_content = '\n'.join(lines[1:-1]) if len(lines) > 2 else improved_content

        # Проверяем что код валидный (хотя бы базово)
        if 'export default' not in improved_content:
            print(f'⚠️  Warning: GPT removed export statement, using original')
            return content

        print(f'✅ Content improved successfully')
        return improved_content

    except Exception as e:
        print(f'❌ Error improving {file_path}: {e}')
        return content  # Возвращаем оригинал при ошибке

def get_improvement_instructions(improvement_type):
    """Получить инструкции по улучшению в зависимости от типа"""

    instructions = {
        'readability': """
- Сократи длинные предложения (максимум 20 слов)
- Упрости сложные термины:
  * "автоматизация юридической работы" → "автоматизация для юристов"
  * "мультиагентная система" → "система с AI-помощниками"
  * "Due Diligence" → "проверка документов"
- Разбей длинные абзацы на короткие (2-3 предложения)
- Добавь переходные слова ("например", "поэтому", "кроме того")
""",
        'content_length': """
- Добавь конкретные примеры и детали
- Раскрой каждый пункт подробнее
- Добавь данные и статистику (где уместно)
- НЕ добавляй воду — только ценную информацию
""",
        'trust_signals': """
- Добавь конкретику и факты
- Замени общие фразы на конкретные примеры
- Добавь цифры и данные (где уместно)
""",
        'general': """
- Сократи длинные предложения (до 20 слов)
- Упрости сложные термины
- Сохрани всю информацию
"""
    }

    return instructions.get(improvement_type, instructions['general'])

def main():
    print(f'🤖 Starting AI improvements for Issue #{ISSUE_NUMBER}')

    if not OPENAI_API_KEY:
        print('❌ OPENAI_API_KEY not set')
        return

    # Получаем детали Issue
    issue = get_issue_details(ISSUE_NUMBER)
    print(f'📋 Issue: {issue["title"]}')

    improvement_type = identify_improvement_type(issue)
    print(f'🎯 Improvement type: {improvement_type}')

    # Находим компоненты для обработки
    components_dir = Path('components')

    if not components_dir.exists():
        print(f'❌ Components directory not found')
        return

    # Обрабатываем только компоненты с контентом
    # (не трогаем Header, Footer - там мало текста)
    target_components = [
        'Hero.tsx',
        'Features.tsx',
        'Services.tsx',
        'CaseStudies.tsx',
        'AboutTeam.tsx',
        'LeadMagnets.tsx'
    ]

    modified_files = []

    for component_name in target_components:
        component_path = components_dir / component_name

        if not component_path.exists():
            print(f'⏭️  Skipping {component_name} (not found)')
            continue

        print(f'\n📝 Processing: {component_name}')

        # Обрабатываем компонент
        improved_content = improve_component_content(component_path, improvement_type)

        # Сохраняем только если есть изменения
        with open(component_path, 'r', encoding='utf-8') as f:
            original_content = f.read()

        if improved_content != original_content:
            with open(component_path, 'w', encoding='utf-8') as f:
                f.write(improved_content)

            modified_files.append(str(component_path))
            print(f'✅ {component_name} updated')
        else:
            print(f'⏭️  {component_name} - no changes')

    if not modified_files:
        print('\n⚠️  No files were modified')
        return

    print(f'\n✅ Modified {len(modified_files)} files:')
    for file in modified_files:
        print(f'  - {file}')

    # Добавляем комментарий к Issue
    issue_obj = repo.get_issue(ISSUE_NUMBER)
    issue_obj.create_comment(
        f'🤖 AI improvements generated!\n\n'
        f'A Pull Request will be created with the following improvements:\n'
        f'- Type: {improvement_type}\n'
        f'- Modified files: {len(modified_files)}\n\n'
        f'Files changed:\n' +
        '\n'.join([f'- `{f}`' for f in modified_files]) +
        f'\n\nPlease review the PR carefully before merging.'
    )

    print('\n✅ Done!')

if __name__ == '__main__':
    main()
