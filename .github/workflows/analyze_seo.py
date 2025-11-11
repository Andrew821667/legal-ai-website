#!/usr/bin/env python3
"""SEO Analysis Script for GitHub Actions"""

import json
import sys
from datetime import datetime

sys.path.insert(0, 'seo-tools')

SITE_URL = 'https://legal-ai-website-iota.vercel.app'

try:
    from seo_ai_models.models.seo_advisor.advisor import SEOAdvisor
    from seo_ai_models.parsers.parsing_pipeline import ParsingPipeline

    print('✅ Modules imported successfully')

    pipeline = ParsingPipeline()
    advisor = SEOAdvisor()

    print(f'Analyzing: {SITE_URL}')

    page_data = pipeline.analyze_url(SITE_URL)

    if page_data and 'content' in page_data:
        seo_report = advisor.analyze_content(page_data['content'])
    else:
        seo_report = {'score': 0, 'error': 'No content'}

    results = {
        'timestamp': datetime.now().isoformat(),
        'site_url': SITE_URL,
        'page_data': page_data,
        'seo_analysis': seo_report,
        'overall_score': seo_report.get('score', 0)
    }

    report_file = f'seo-reports/report-{datetime.now().strftime("%Y-%m-%d")}.json'
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    with open('seo-reports/SUMMARY.md', 'w') as f:
        f.write(f'# 🔍 SEO Analysis Report\n\n')
        f.write(f'**Date:** {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}\n\n')
        f.write(f'**Site:** {SITE_URL}\n\n')
        f.write(f'**Overall Score:** {results["overall_score"]}/100\n\n')

        if results['overall_score'] >= 80:
            f.write('**Status:** ✅ Отлично\n\n')
        elif results['overall_score'] >= 60:
            f.write('**Status:** ⚠️ Хорошо, но есть улучшения\n\n')
        else:
            f.write('**Status:** ❌ Требуется оптимизация\n\n')

        if page_data:
            f.write('## 📊 Метаданные\n\n')
            if 'title' in page_data:
                f.write(f'- Title: {page_data["title"]}\n')
            if 'meta_description' in page_data:
                f.write(f'- Description: {page_data["meta_description"]}\n')
            f.write('\n')

        if isinstance(seo_report, dict) and 'recommendations' in seo_report:
            f.write('## 🎯 Рекомендации\n\n')
            for i, rec in enumerate(seo_report['recommendations'][:10], 1):
                f.write(f'{i}. {rec}\n')

        f.write('\n---\n\n*Powered by SEO AI Models*\n')

    print(f'✅ Analysis complete! Score: {results["overall_score"]}/100')

except Exception as e:
    print(f'❌ Error: {e}')
    import traceback
    traceback.print_exc()
    sys.exit(1)
