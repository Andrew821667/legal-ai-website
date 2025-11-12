#!/usr/bin/env python3
"""AI-powered content improvement script for SEO optimization"""

import os
import json
import re
from pathlib import Path
from openai import OpenAI
from bs4 import BeautifulSoup
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

def improve_readability(text):
    """Улучшить читаемость текста через GPT"""

    prompt = f"""Ты — эксперт по SEO-копирайтингу. Улучши читаемость этого текста:

ТРЕБОВАНИЯ:
1. Сократи предложения: средняя длина 15-20 слов (сейчас ~33)
2. Разбей длинные абзацы на короткие (2-3 предложения)
3. Замени сложные термины простыми аналогами:
   - "мультиагентная система" → "система с несколькими AI-помощниками"
   - "Due Diligence" → "проверка документов при сделках"
   - "автоматизация юридической работы" → "автоматизация для юристов"
4. Добавь переходные слова: "поэтому", "например", "кроме того"
5. СОХРАНИ всю важную информацию и цифры
6. СОХРАНИ HTML-теги, классы, структуру

ТЕКСТ:
{text}

ВЕРНИ ТОЛЬКО УЛУЧШЕННЫЙ ТЕКСТ БЕЗ КОММЕНТАРИЕВ."""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Ты эксперт по SEO-копирайтингу. Улучшаешь читаемость текста, сохраняя всю информацию."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.3,
        max_tokens=4000
    )

    return response.choices[0].message.content.strip()

def add_trust_signals(content):
    """Добавить сигналы доверия"""

    from datetime import datetime

    # Добавляем дату обновления в footer
    footer_date = f'<p class="text-sm text-gray-500 mt-4">Последнее обновление: {datetime.now().strftime("%d.%m.%Y")}</p>'

    # Ищем footer и добавляем дату
    if '<footer' in content:
        content = content.replace('</footer>', f'{footer_date}</footer>')

    return content

def expand_content(text, target_words=1200):
    """Расширить контент до целевого количества слов"""

    current_words = len(text.split())
    words_needed = target_words - current_words

    if words_needed <= 0:
        return text

    prompt = f"""Расширь этот контент, добавив {words_needed} слов:

ТРЕБОВАНИЯ:
1. Добавь конкретные примеры и детали
2. Раскрой каждый пункт подробнее
3. Добавь данные и статистику
4. НЕ добавляй воду — только ценную информацию
5. СОХРАНИ HTML-структуру

ТЕКСТ:
{text}

ВЕРНИ РАСШИРЕННУЮ ВЕРСИЮ:"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Ты эксперт по контент-маркетингу. Расширяешь тексты, добавляя ценную информацию."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.4,
        max_tokens=4000
    )

    return response.choices[0].message.content.strip()

def process_tsx_file(file_path, improvement_type):
    """Обработать TSX файл - упрощенный подход через целый файл"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f'📄 File size: {len(content)} characters')

    # Упрощенный подход: передаем весь контент GPT для улучшения
    # GPT сам найдет текстовые блоки и улучшит их, сохраняя JSX структуру

    prompt = f"""Ты — эксперт по SEO и React/Next.js. Улучши ТОЛЬКО ТЕКСТОВЫЙ КОНТЕНТ в этом TSX файле:

ТРЕБОВАНИЯ:
1. СОХРАНИ ВСЮ JSX структуру, компоненты, импорты, экспорты
2. СОХРАНИ все {{переменные}}, классы, стили
3. Улучши только русский текст внутри тегов:
   - Сократи длинные предложения (до 20 слов)
   - Упрости сложные термины
   - Добавь связанные термины для семантической связности
   - Добавь переходы между разделами
4. НЕ трогай код, только текст
5. ВЕРНИ ВЕСЬ ФАЙЛ с улучшенным текстом

ФАЙЛ:
```tsx
{content[:10000]}
```

ВЕРНИ УЛУЧШЕННЫЙ ФАЙЛ ПОЛНОСТЬЮ:"""

    try:
        response = client.chat.completions.create(
            model="gpt-4o",  # Используем GPT-4 для лучшего понимания кода
            messages=[
                {"role": "system", "content": "Ты эксперт по SEO-копирайтингу и React. Улучшаешь текст в TSX, сохраняя всю структуру кода."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            max_tokens=10000
        )

        improved_content = response.choices[0].message.content.strip()

        # Убираем markdown code blocks если GPT их добавил
        if improved_content.startswith('```'):
            lines = improved_content.split('\n')
            improved_content = '\n'.join(lines[1:-1])  # Убираем первую и последнюю строку

        print(f'✅ Content improved by GPT-4')
        return improved_content

    except Exception as e:
        print(f'❌ Error improving content: {e}')
        return content  # Возвращаем оригинал при ошибке

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

    # Находим файл главной страницы
    main_page = Path('app/page.tsx')

    if not main_page.exists():
        print(f'❌ File not found: {main_page}')
        return

    print(f'📝 Processing: {main_page}')

    # Обрабатываем файл
    modified_content = process_tsx_file(main_page, improvement_type)

    # Сохраняем изменения
    with open(main_page, 'w', encoding='utf-8') as f:
        f.write(modified_content)

    print(f'✅ File updated: {main_page}')

    # Добавляем комментарий к Issue
    issue_obj = repo.get_issue(ISSUE_NUMBER)
    issue_obj.create_comment(
        f'🤖 AI improvements generated!\n\n'
        f'A Pull Request will be created with the following improvements:\n'
        f'- Type: {improvement_type}\n'
        f'- File: {main_page}\n\n'
        f'Please review the PR carefully before merging.'
    )

    print('✅ Done!')

if __name__ == '__main__':
    main()
