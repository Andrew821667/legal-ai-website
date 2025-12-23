"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { BookOpen, Scale, Building2, Brain, Shield, FileText } from "lucide-react";

export default function Sources() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const sourceCategories = [
    {
      icon: Scale,
      title: "Нормативная база",
      gradient: "from-blue-500 to-indigo-600",
      sources: [
        {
          name: "Гражданский кодекс РФ",
          url: "http://www.consultant.ru/document/cons_doc_LAW_5142/",
          description: "Основа договорного права и обязательств"
        },
        {
          name: "Арбитражный процессуальный кодекс РФ",
          url: "http://www.consultant.ru/document/cons_doc_LAW_37800/",
          description: "Процедуры арбитражного судопроизводства"
        },
        {
          name: "Налоговый кодекс РФ",
          url: "http://www.consultant.ru/document/cons_doc_LAW_19671/",
          description: "Налоговое законодательство и комплаенс"
        },
        {
          name: "Земельный кодекс РФ",
          url: "http://www.consultant.ru/document/cons_doc_LAW_33773/",
          description: "Правовое регулирование земельных отношений"
        },
        {
          name: "КоАП РФ",
          url: "http://www.consultant.ru/document/cons_doc_LAW_34661/",
          description: "Административные правонарушения и ответственность"
        },
      ]
    },
    {
      icon: Building2,
      title: "Официальные источники и реестры",
      gradient: "from-emerald-500 to-teal-600",
      sources: [
        {
          name: "Картотека арбитражных дел",
          url: "https://kad.arbitr.ru/",
          description: "Мониторинг судебных дел в режиме реального времени"
        },
        {
          name: "ГАС «Правосудие»",
          url: "https://bsr.sudrf.ru/",
          description: "Судебная практика судов общей юрисдикции"
        },
        {
          name: "ЕГРЮЛ / ЕГРИП",
          url: "https://egrul.nalog.ru/",
          description: "Проверка контрагентов и юридических лиц"
        },
        {
          name: "Публичная кадастровая карта",
          url: "https://pkk.rosreestr.ru/",
          description: "Кадастровые сведения о земельных участках"
        },
        {
          name: "Реестр Росреестра",
          url: "https://rosreestr.gov.ru/",
          description: "Права на недвижимое имущество"
        },
      ]
    },
    {
      icon: BookOpen,
      title: "Правовые базы и аналитика",
      gradient: "from-amber-500 to-orange-600",
      sources: [
        {
          name: "КонсультантПлюс",
          url: "http://www.consultant.ru/",
          description: "Справочная правовая система"
        },
        {
          name: "Постановления Пленума ВС РФ",
          url: "https://www.vsrf.ru/documents/own/",
          description: "Разъяснения высшей судебной инстанции"
        },
        {
          name: "Письма Минфина и ФНС",
          url: "https://www.nalog.gov.ru/",
          description: "Официальные разъяснения по налогам"
        },
        {
          name: "Судебная практика ВС РФ",
          url: "https://www.vsrf.ru/",
          description: "Прецеденты и обзоры судебной практики"
        },
      ]
    },
    {
      icon: Shield,
      title: "Стандарты и комплаенс",
      gradient: "from-red-500 to-rose-600",
      sources: [
        {
          name: "ФЗ о противодействии коррупции",
          url: "http://www.consultant.ru/document/cons_doc_LAW_82959/",
          description: "Антикоррупционные меры и compliance"
        },
        {
          name: "Методические рекомендации ЦБ РФ",
          url: "https://www.cbr.ru/",
          description: "Стандарты финансового compliance"
        },
        {
          name: "152-ФЗ о персональных данных",
          url: "http://www.consultant.ru/document/cons_doc_LAW_61801/",
          description: "Защита персональных данных (GDPR аналог)"
        },
        {
          name: "Кодекс профессиональной этики адвоката",
          url: "https://fparf.ru/documents/kodeks/",
          description: "Этические стандарты юридической практики"
        },
      ]
    },
    {
      icon: Brain,
      title: "Технологии искусственного интеллекта",
      gradient: "from-purple-500 to-pink-600",
      sources: [
        {
          name: "YandexGPT Documentation",
          url: "https://yandex.cloud/ru/docs/yandexgpt/",
          description: "Российская модель для обработки текстов"
        },
        {
          name: "GigaChat (Сбер)",
          url: "https://developers.sber.ru/portal/products/gigachat",
          description: "Мультимодальная нейросеть от Сбера"
        },
        {
          name: "Claude API (Anthropic)",
          url: "https://www.anthropic.com/",
          description: "Передовая модель для сложного анализа"
        },
        {
          name: "LangChain Framework",
          url: "https://www.langchain.com/",
          description: "Фреймворк для RAG-систем и агентов"
        },
      ]
    },
    {
      icon: FileText,
      title: "Корпоративное право",
      gradient: "from-cyan-500 to-blue-600",
      sources: [
        {
          name: "ФЗ «Об обществах с ограниченной ответственностью»",
          url: "http://www.consultant.ru/document/cons_doc_LAW_12462/",
          description: "Корпоративное управление ООО"
        },
        {
          name: "ФЗ «Об акционерных обществах»",
          url: "http://www.consultant.ru/document/cons_doc_LAW_8743/",
          description: "Правовое регулирование АО"
        },
        {
          name: "ФЗ «О несостоятельности (банкротстве)»",
          url: "http://www.consultant.ru/document/cons_doc_LAW_39331/",
          description: "Процедуры банкротства (200+ наших дел)"
        },
      ]
    },
  ];

  return (
    <section id="sources" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Источники и стандарты
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы работаем только с проверенными и официальными источниками.
            Все наши решения основаны на актуальном законодательстве РФ.
            Каждая рекомендация подкреплена ссылками на нормативные акты.
          </p>
          <div className="mt-6 inline-block bg-green-100 border border-green-300 rounded-lg px-6 py-3">
            <p className="text-green-800 font-semibold flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Все источники обновляются автоматически в режиме 24/7
            </p>
          </div>
        </div>

        {/* Sources Grid */}
        <div ref={gridRef} className="space-y-12">
          {sourceCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`stagger-item ${gridVisible ? 'visible' : ''}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Sources List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.sources.map((source, sourceIndex) => (
                  <a
                    key={sourceIndex}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="group bg-white rounded-lg p-5 shadow-sm hover:shadow-lg border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col h-full">
                      <h4 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {source.name}
                      </h4>
                      <p className="text-sm text-slate-600 flex-grow">
                        {source.description}
                      </p>
                      <div className="mt-3 text-xs text-amber-600 font-medium flex items-center gap-1">
                        Открыть источник
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Работаем с актуальным законодательством
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Наши системы на основе искусственного интеллекта автоматически отслеживают изменения в законодательстве.
            Вы всегда получаете рекомендации на основе актуальных норм права.
            Это гарантирует юридическую точность всех решений.
          </p>
        </div>
      </div>
    </section>
  );
}
