#!/usr/bin/env python3
"""Простой SEO анализатор без зависимостей от seo-ai-models"""

import json
import sys
from datetime import datetime
import requests
from bs4 import BeautifulSoup

SITE_URL = 'https://legal-ai-website-iota.vercel.app'

def analyze_page(url):
    """Простой анализ страницы"""
    try:
        print(f'🔍 Анализирую: {url}')

        # Загружаем страницу
        response = requests.get(url, timeout=30, headers={
            'User-Agent': 'Mozilla/5.0 (compatible; SEO-Analyzer/1.0)'
        })
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')

        # SEO метрики
        title = soup.find('title')
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        h1_tags = soup.find_all('h1')
        h2_tags = soup.find_all('h2')
        images = soup.find_all('img')
        links = soup.find_all('a')

        # Подсчёт слов
        text = soup.get_text()
        words = len([w for w in text.split() if len(w) > 2])

        # Анализ изображений
        images_without_alt = [img for img in images if not img.get('alt')]

        # Внутренние ссылки
        internal_links = [link for link in links if link.get('href', '').startswith('/') or SITE_URL in link.get('href', '')]

        result = {
            "url": url,
            "title": title.text.strip() if title else None,
            "title_length": len(title.text) if title else 0,
            "meta_description": meta_desc.get('content') if meta_desc else None,
            "meta_desc_length": len(meta_desc.get('content', '')) if meta_desc else 0,
            "h1_count": len(h1_tags),
            "h1_texts": [h1.text.strip()[:100] for h1 in h1_tags[:3]],
            "h2_count": len(h2_tags),
            "word_count": words,
            "images_total": len(images),
            "images_without_alt": len(images_without_alt),
            "internal_links": len(internal_links),
            "total_links": len(links),
        }

        # Вычисление score
        score = 0
        max_score = 100
        recommendations = []

        # Title (20 points)
        if result['title'] and 30 <= result['title_length'] <= 60:
            score += 20
        elif result['title']:
            score += 10
            if result['title_length'] < 30:
                recommendations.append(f"⚠️ Title слишком короткий ({result['title_length']} символов, рекомендуется 30-60)")
            elif result['title_length'] > 60:
                recommendations.append(f"⚠️ Title слишком длинный ({result['title_length']} символов, рекомендуется 30-60)")
        else:
            recommendations.append("❌ Отсутсфвует <title> тег")

        # Meta description (15 points)
        if result['meta_description'] and 120 <= result['meta_desc_length'] <= 160:
            score += 15
        elif result['meta_description']:
            score += 8
            if result['meta_desc_length'] < 120:
                recommendations.append(f"⚠️ Meta description короткий ({result['meta_desc_length']} символов, рекомендуется 120-160)")
            elif result['meta_desc_length'] > 160:
                recommendations.append(f"⚠️ Meta description длинный ({result['meta_desc_length']} символов, рекомендуется 120-160)")
        else:
            recommendations.append("❌ Отсутствует meta description")

        # H1 (15 points)
        if result['h1_count'] == 1:
            score += 15
        elif result['h1_count'] > 1:
            score += 8
            recommendations.append(f"⚠️ Несколько H1 заголовков ({result['h1_count']}, рекомендуется 1)")
        else:
            recommendations.append("❌ Отсутствует H1 заголовок")

        # Content (20 points)
        if result['word_count'] >= 300:
            score += 20
        elif result['word_count'] >= 150:
            score += 10
            recommendations.append(f"⚠️ Мало контента ({result['word_count']} слов, рекомендуется 300+)")
        else:
            recommendations.append(f"❌ Очень мало контента ({result['word_count']} слов, нужно минимум 300)")

        # Images alt (15 points)
        if result['images_total'] > 0:
            alt_ratio = 1 - (result['images_without_alt'] / result['images_total'])
            score += int(15 * alt_ratio)
            if result['images_without_alt'] > 0:
                recommendations.append(f"⚠️ {result['images_without_alt']} изображений без alt текста")
        else:
            score += 15

        # Internal links (15 points)
        if result['internal_links'] >= 5:
            score += 15
        elif result['internal_links'] >= 3:
            score += 10
            recommendations.append(f"⚠️ Мало внутренних ссылок ({result['internal_links']}, рекомендуется 5+)")
        elif result['internal_links'] >= 1:
            score += 5
            recommendations.append(f"⚠️ Очень мало внутренних ссылок ({result['internal_links']}, рекомендуется 5+)")
        else:
            recommendations.append("❌ Нет внутренних ссылок")

        result['score'] = min(score, max_score)
        result['recommendations'] = recommendations

        print(f'✅ Анализ завершён! Score: {result["score"]}/100')
        return result

    except Exception as e:
        print(f'❌ Ошибка: {e}')
        import traceback
        traceback.print_exc()
        return {
            "url": url,
            "error": str(e),
            "score": 0
        }

def main():
    results = analyze_page(SITE_URL + "/")

    if 'error' in results:
        print(f'❌ Не удалось проанализировать сайт: {results["error"]}')
        sys.exit(1)

    # Сохранение JSON
    report_file = f'seo-reports/report-{datetime.now().strftime("%Y-%m-%d")}.json'
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump({
            'timestamp': datetime.now().isoformat(),
            'site_url': SITE_URL,
            'overall_score': results['score'],
            'page_data': results
        }, f, ensure_ascii=False, indent=2)

    # Markdown summary
    with open('seo-reports/SUMMARY.md', 'w') as f:
        f.write(f'# 🔍 SEO Analysis Report\n\n')
        f.write(f'**Date:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}\n\n')
        f.write(f'**Site:** {SITE_URL}\n\n')
        f.write(f'**Overall Score:** {results["score"]}/100\n\n')

        if results['score'] >= 80:
            f.write(f'**Status:** ✅ Отлично\n\n')
        elif results['score'] >= 60:
            f.write(f'**Status:** ⚠️ Хорошо, но есть улучшения\n\n')
        else:
            f.write(f'**Status:** ❌ Требуется оптимизация\n\n')

        f.write(f'## 📊 Метаданные страницы\n\n')
        f.write(f'- **Title:** {results["title"]} ({results["title_length"]} символов)\n')
        f.write(f'- **Meta Description:** {"✅ Есть" if results["meta_description"] else "❌ Нет"} ({results["meta_desc_length"]} символов)\n')
        f.write(f'- **H1:** {results["h1_count"]} шт\n')
        if results['h1_texts']:
            for h1 in results['h1_texts']:
                f.write(f'  - {h1}\n')
        f.write(f'- **H2:** {results["h2_count"]} шт\n')
        f.write(f'- **Слов:** {results["word_count"]}\n')
        f.write(f'- **Изображений:** {results["images_total"]} (без alt: {results["images_without_alt"]})\n')
        f.write(f'- **Внутренних ссылок:** {results["internal_links"]} из {results["total_links"]}\n\n')

        if results['recommendations']:
            f.write(f'## 🎯 Рекомендации по улучшению\n\n')
            for i, rec in enumerate(results['recommendations'], 1):
                f.write(f'{i}. {rec}\n')
            f.write(f'\n')

        f.write(f'\n---\n\n*Powered by Legal AI PRO SEO Analyzer*\n')

    print(f'📊 Отчёт сохранён: {report_file}')
    print(f'\n=== SUMMARY ===')
    print(f'Score: {results["score"]}/100')
    print(f'Recommendations: {len(results["recommendations"])}')

if __name__ == "__main__":
    main()
