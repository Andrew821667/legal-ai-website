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
    """Обработать TSX файл"""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Извлекаем текстовый контент (упрощенно, для главной страницы)
    # В реальности нужен более сложный парсинг JSX

    # Ищем большие текстовые блоки в JSX
    text_blocks = re.findall(r'<(p|h[1-6]|div)[^>]*>(.*?)</\1>', content, re.DOTALL)

    modified_content = content

    for tag, text in text_blocks:
        if len(text.strip()) < 50:  # Пропускаем короткие тексты
            continue

        # Пропускаем если содержит JSX переменные
        if '{' in text or '<' in text:
            continue

        original_text = text.strip()

        # Применяем улучшения
        if improvement_type == 'readability':
            improved_text = improve_readability(original_text)
        elif improvement_type == 'content_length':
            improved_text = expand_content(original_text)
        else:
            improved_text = improve_readability(original_text)

        # Заменяем в контенте
        modified_content = modified_content.replace(original_text, improved_text)

    return modified_content

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
