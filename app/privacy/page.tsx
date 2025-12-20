import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Legal AI PRO',
  description: 'Политика конфиденциальности и обработки персональных данных Legal AI PRO в соответствии с 152-ФЗ',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-6">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Общие положения</h2>
              <p className="text-slate-300 mb-4">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации,
                которую Legal AI PRO (далее — Компания) может получить о пользователе во время использования сайта legalaipro.ru
                (далее — Сайт).
              </p>
              <p className="text-slate-300 mb-4">
                Использование Сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней
                условиями обработки его персональной информации.
              </p>
              <p className="text-slate-300">
                Настоящая Политика конфиденциальности разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
                «О персональных данных» (далее — 152-ФЗ).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Персональные данные пользователей</h2>
              <p className="text-slate-300 mb-4">
                Под персональными данными понимается информация, относящаяся к прямо или косвенно определенному или определяемому
                физическому лицу (субъекту персональных данных).
              </p>
              <p className="text-slate-300 mb-4">
                Компания может обрабатывать следующие персональные данные:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Email адрес</li>
                <li>Имя и фамилия</li>
                <li>Название организации и должность</li>
                <li>Телефон (если предоставлен)</li>
                <li>IP-адрес и данные cookies</li>
                <li>Информация о действиях на сайте (аналитика)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Цели обработки персональных данных</h2>
              <p className="text-slate-300 mb-4">
                Персональные данные пользователей обрабатываются в следующих целях:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Предоставление консультаций и услуг</li>
                <li>Связь с пользователем (ответы на вопросы, отправка информации)</li>
                <li>Улучшение качества услуг и пользовательского опыта</li>
                <li>Проведение статистических и аналитических исследований</li>
                <li>Информирование об обновлениях и новых услугах (с согласия пользователя)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Правовые основания обработки</h2>
              <p className="text-slate-300 mb-4">
                Компания обрабатывает персональные данные на следующих правовых основаниях:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Согласие субъекта персональных данных (ст. 9 ч. 1 п. 1 152-ФЗ)</li>
                <li>Исполнение договора (ст. 6 ч. 1 152-ФЗ)</li>
                <li>Необходимость для осуществления прав и законных интересов (ст. 6 ч. 1 152-ФЗ)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Способы и сроки обработки</h2>
              <p className="text-slate-300 mb-4">
                Обработка персональных данных осуществляется с использованием средств автоматизации и без использования средств
                автоматизации с соблюдением требований 152-ФЗ.
              </p>
              <p className="text-slate-300 mb-4">
                Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не более 5 лет
                с момента последнего взаимодействия с пользователем.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Использование cookies и аналитики</h2>
              <p className="text-slate-300 mb-4">
                Сайт использует cookies и системы аналитики для улучшения работы:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Яндекс.Метрика — для анализа посещаемости и поведения пользователей</li>
                <li>Google Analytics — для статистики и улучшения сайта (при наличии)</li>
              </ul>
              <p className="text-slate-300">
                Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять на функциональность сайта.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Передача персональных данных третьим лицам</h2>
              <p className="text-slate-300 mb-4">
                Компания не передает персональные данные третьим лицам, за исключением следующих случаев:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Пользователь явно выразил свое согласие на такую передачу</li>
                <li>Передача необходима для исполнения договора с пользователем</li>
                <li>Передача предусмотрена законодательством РФ</li>
                <li>Передача техническим партнерам (хостинг, email-сервисы) для обеспечения работы сайта</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Защита персональных данных</h2>
              <p className="text-slate-300 mb-4">
                Компания принимает необходимые организационные и технические меры для защиты персональных данных от
                неправомерного доступа, уничтожения, изменения, блокирования, копирования и иных неправомерных действий.
              </p>
              <p className="text-slate-300">
                Меры защиты включают: шифрование данных (HTTPS), защищенное хранение, ограничение доступа, регулярное обновление
                систем безопасности.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Права пользователей</h2>
              <p className="text-slate-300 mb-4">
                В соответствии со ст. 14 152-ФЗ, субъект персональных данных имеет право:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Получать информацию о наличии и содержании своих персональных данных</li>
                <li>Требовать уточнения персональных данных</li>
                <li>Требовать удаления или блокирования персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие Компании в Роскомнадзор или в судебном порядке</li>
              </ul>
              <p className="text-slate-300">
                Для реализации своих прав направьте запрос на email: <a href="mailto:a.popov.gv@gmail.com" className="text-amber-400 hover:text-amber-300">a.popov.gv@gmail.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Изменение Политики конфиденциальности</h2>
              <p className="text-slate-300">
                Компания имеет право вносить изменения в настоящую Политику конфиденциальности. Новая редакция Политики вступает
                в силу с момента ее размещения на Сайте. Действующая редакция всегда находится на странице
                <a href="/privacy" className="text-amber-400 hover:text-amber-300"> legalaipro.ru/privacy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Контактная информация</h2>
              <p className="text-slate-300 mb-4">
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <ul className="list-none text-slate-300 space-y-2">
                <li>Телефон: <a href="tel:+79092330909" className="text-amber-400 hover:text-amber-300">+7 909 233-09-09</a></li>
                <li>Email: <a href="mailto:a.popov.gv@gmail.com" className="text-amber-400 hover:text-amber-300">a.popov.gv@gmail.com</a></li>
                <li>Telegram: <a href="https://t.me/legal_ai_helper_new_bot" className="text-amber-400 hover:text-amber-300" target="_blank" rel="noopener noreferrer">@legal_ai_helper_new_bot</a></li>
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
