import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании и команде | Legal AI PRO',
  description: 'Опыт, экспертиза и достижения команды Legal AI PRO. 20+ лет юридической практики и разработки AI-решений для автоматизации юридической работы.',
  keywords: 'Legal AI PRO команда, юристы разработчики, AI эксперты, юридическая автоматизация',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'О компании Legal AI PRO - Юристы-разработчики AI решений',
    description: '20+ лет опыта в юриспруденции и программировании. Создаем AI-системы для автоматизации юридической работы.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            О компании Legal AI PRO
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Мы — команда профессионалов, которая объединяет глубокую юридическую экспертизу
            с передовыми технологиями искусственного интеллекта
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Наша миссия</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            Мы создаем интеллектуальные системы, которые освобождают юристов от рутинной работы
            и позволяют сосредоточиться на решении сложных задач, требующих человеческого опыта и анализа.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Наша цель — сделать юридические услуги более доступными, быстрыми и качественными
            за счет внедрения технологий искусственного интеллекта.
          </p>
        </div>

        {/* Founder */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Основатель и ведущий эксперт</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-6xl font-bold">
                АП
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-2">Алексей Попов</h3>
              <p className="text-amber-400 font-semibold mb-4">Основатель Legal AI PRO</p>
              <p className="text-slate-300 mb-4">Email: <a href="mailto:a.popov.gv@gmail.com" className="text-amber-400 hover:text-amber-300">a.popov.gv@gmail.com</a></p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Юридический опыт</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>20+ лет практики в крупных компаниях и холдингах</li>
                    <li>Chief Legal Officer (CLO) в агрохолдингах, банках, промышленных холдингах</li>
                    <li>Опыт ведения 200+ процедур банкротства</li>
                    <li>Специализация: договорная работа, M&A, корпоративное право, банкротство</li>
                    <li>Международная практика (English proficient)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Технические компетенции</h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    <li>Программирование: Python, TypeScript/JavaScript</li>
                    <li>AI/ML: OpenAI GPT-4, Claude, YandexGPT, GigaChat</li>
                    <li>Разработка full-stack приложений: React, Next.js, FastAPI</li>
                    <li>Векторные базы данных, RAG-системы, fine-tuning моделей</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Подход к работе</h4>
                  <p className="text-slate-300">
                    Уникальное сочетание юридического опыта и программирования позволяет создавать AI-решения,
                    которые действительно понимают специфику юридической работы и решают реальные проблемы юристов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Достижения</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">200+</div>
              <div className="text-white font-semibold mb-1">Процедур банкротства</div>
              <div className="text-slate-400 text-sm">Опыт ведения сложных судебных процессов</div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-white font-semibold mb-1">Автоматизированных договоров</div>
              <div className="text-slate-400 text-sm">Проверено с помощью AI-систем</div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">80%+</div>
              <div className="text-white font-semibold mb-1">Экономия времени</div>
              <div className="text-slate-400 text-sm">Для юротделов клиентов</div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
              <div className="text-white font-semibold mb-1">Компаний-клиентов</div>
              <div className="text-slate-400 text-sm">Успешно внедренных проектов</div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Технологический стек</h2>

          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🇷🇺</span>
              <h3 className="text-xl font-bold text-green-400">Российские AI-решения</h3>
            </div>
            <p className="text-slate-300">
              Активно используем YandexGPT и GigaChat для соответствия требованиям импортозамещения
              и обеспечения независимости от зарубежных технологий.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-400 mb-3">AI-модели</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">OpenAI GPT-4</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">Claude</span>
                <span className="px-4 py-2 rounded-lg bg-green-800 text-green-100 border border-green-600 text-sm font-semibold">YandexGPT</span>
                <span className="px-4 py-2 rounded-lg bg-green-800 text-green-100 border border-green-600 text-sm font-semibold">GigaChat (Сбер)</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">LangChain</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-400 mb-3">Backend</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">Python</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">FastAPI</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">PostgreSQL</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">Pinecone</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">Docker</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-400 mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">TypeScript</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">Next.js</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">React</span>
                <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm">TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-amber-500/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-500/50">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Свяжитесь с нами</h2>
          <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">📧</div>
              <div className="text-white font-semibold mb-2">Email</div>
              <a href="mailto:a.popov.gv@gmail.com" className="text-amber-400 hover:text-amber-300 text-sm">
                a.popov.gv@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <div className="text-white font-semibold mb-2">Telegram Бот</div>
              <a href="https://t.me/legal_ai_helper_new_bot" className="text-amber-400 hover:text-amber-300 text-sm" target="_blank" rel="noopener noreferrer">
                @legal_ai_helper_new_bot
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">📢</div>
              <div className="text-white font-semibold mb-2">Telegram Канал</div>
              <a href="https://t.me/legal_ai_pro" className="text-amber-400 hover:text-amber-300 text-sm" target="_blank" rel="noopener noreferrer">
                @legal_ai_pro
              </a>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/#services"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Посмотреть наши услуги →
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block text-slate-400 hover:text-amber-400 transition-colors"
          >
            ← Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}
