import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Условия использования | Legal AI PRO',
  description: 'Пользовательское соглашение и условия использования сайта Legal AI PRO',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8">
            Условия использования
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-6">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Общие условия</h2>
              <p className="text-slate-300 mb-4">
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между Legal AI PRO
                (далее — Компания) и пользователями сайта legalaipro.ru (далее — Сайт).
              </p>
              <p className="text-slate-300 mb-4">
                Используя Сайт, вы подтверждаете, что:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Вы прочитали и согласны с условиями настоящего Соглашения</li>
                <li>Вы обладаете необходимыми полномочиями для заключения настоящего Соглашения</li>
                <li>Вы достигли 18-летнего возраста или действуете с согласия законного представителя</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Описание услуг</h2>
              <p className="text-slate-300 mb-4">
                Компания предоставляет следующие услуги:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Разработка AI-решений для автоматизации юридической работы</li>
                <li>Консультации по внедрению искусственного интеллекта в юридические процессы</li>
                <li>Создание систем для анализа договоров, мониторинга судебных дел, Due Diligence</li>
                <li>Техническая поддержка и развитие функционала разработанных решений</li>
              </ul>
              <p className="text-slate-300">
                Подробная информация об услугах доступна на Сайте и предоставляется по запросу.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Интеллектуальная собственность</h2>
              <p className="text-slate-300 mb-4">
                Все материалы, размещенные на Сайте, включая тексты, изображения, графику, логотипы, код и дизайн,
                являются интеллектуальной собственностью Компании и защищены законодательством РФ об авторском праве.
              </p>
              <p className="text-slate-300 mb-4">
                Запрещается без письменного согласия Компании:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Копирование, воспроизведение или распространение материалов Сайта</li>
                <li>Использование материалов в коммерческих целях</li>
                <li>Модификация или создание производных работ</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Правила использования Сайта</h2>
              <p className="text-slate-300 mb-4">
                При использовании Сайта пользователь обязуется:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Не нарушать законодательство Российской Федерации</li>
                <li>Не размещать противоправную, оскорбительную или незаконную информацию</li>
                <li>Не предпринимать действий, которые могут нарушить работу Сайта</li>
                <li>Не использовать автоматизированные средства для сбора информации без согласия Компании</li>
                <li>Предоставлять достоверную информацию при заполнении форм</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Ограничение ответственности</h2>
              <p className="text-slate-300 mb-4">
                Компания не несет ответственности за:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Временную недоступность Сайта по техническим причинам</li>
                <li>Действия или бездействие третьих лиц</li>
                <li>Убытки, возникшие вследствие использования или невозможности использования Сайта</li>
                <li>Точность и полноту информации, размещенной на Сайте для ознакомительных целей</li>
              </ul>
              <p className="text-slate-300">
                Информация на Сайте носит общий характер и не является юридической консультацией.
                Для получения профессиональной помощи обратитесь к специалистам Компании.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Конфиденциальность</h2>
              <p className="text-slate-300">
                Обработка персональных данных пользователей осуществляется в соответствии с
                <a href="/privacy" className="text-amber-400 hover:text-amber-300"> Политикой конфиденциальности</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Договор на оказание услуг</h2>
              <p className="text-slate-300 mb-4">
                Коммерческие услуги предоставляются на основании отдельного договора, который заключается между Компанией и клиентом.
              </p>
              <p className="text-slate-300">
                Условия договора, стоимость и сроки оказания услуг определяются индивидуально для каждого проекта.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Гарантии качества</h2>
              <p className="text-slate-300 mb-4">
                Компания гарантирует:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Профессиональное выполнение работ в соответствии с техническим заданием</li>
                <li>Конфиденциальность информации, предоставленной клиентом</li>
                <li>Техническую поддержку разработанных решений в течение гарантийного срока</li>
                <li>Соблюдение сроков, указанных в договоре</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Изменение условий</h2>
              <p className="text-slate-300 mb-4">
                Компания оставляет за собой право изменять настоящее Соглашение в одностороннем порядке.
              </p>
              <p className="text-slate-300">
                Новая редакция Соглашения вступает в силу с момента ее размещения на Сайте. Продолжение использования
                Сайта после внесения изменений означает согласие с новой редакцией Соглашения.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Разрешение споров</h2>
              <p className="text-slate-300 mb-4">
                Все споры и разногласия, возникающие в связи с настоящим Соглашением, решаются путем переговоров.
              </p>
              <p className="text-slate-300">
                При невозможности достижения согласия споры подлежат рассмотрению в суде по месту нахождения Компании
                в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Контактная информация</h2>
              <p className="text-slate-300 mb-4">
                По вопросам использования Сайта и оказания услуг обращайтесь:
              </p>
              <ul className="list-none text-slate-300 space-y-2">
                <li>Email: <a href="mailto:a.popov.gv@gmail.com" className="text-amber-400 hover:text-amber-300">a.popov.gv@gmail.com</a></li>
                <li>Telegram: <a href="https://t.me/legal_ai_helper_new_bot" className="text-amber-400 hover:text-amber-300" target="_blank" rel="noopener noreferrer">@legal_ai_helper_new_bot</a></li>
                <li>Сайт: <a href="https://legalaipro.ru" className="text-amber-400 hover:text-amber-300">legalaipro.ru</a></li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-white/20">
              <a
                href="/"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                ← Вернуться на главную
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
