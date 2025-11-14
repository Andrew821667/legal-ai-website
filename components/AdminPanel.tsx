'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Eye,
  EyeOff,
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Activity,
  Zap,
  Globe,
  Server,
  Database,
  Download,
  RefreshCw
} from 'lucide-react';

interface AdminPanelProps {
  password?: string; // Пароль для доступа (по умолчанию: "admin123")
}

export default function AdminPanel({ password = "admin123" }: AdminPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'seo' | 'technical' | 'analytics'>('seo');

  // Глобальный обработчик комбинации клавиш Ctrl+Shift+A
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsOpen(true);
      }
      // ESC для закрытия
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setInputPassword('');
    setError('');
    setShowPassword(false);
    // Не сбрасываем аутентификацию при закрытии
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      setError('');
      setInputPassword('');
    } else {
      setError('Неверный пароль');
      setInputPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setInputPassword('');
    setError('');
  };

  // Mock данные для SEO (в реальности через API или MCP)
  const seoData = {
    today: {
      visits: 247,
      pageviews: 892,
      uniqueVisitors: 189,
      bounceRate: 42.3,
      avgDuration: '3:24',
      conversions: 12
    },
    week: {
      visits: 1834,
      pageviews: 6521,
      uniqueVisitors: 1456,
      bounceRate: 38.7,
      avgDuration: '3:52',
      conversions: 89
    },
    month: {
      visits: 7921,
      pageviews: 28453,
      uniqueVisitors: 6234,
      bounceRate: 35.2,
      avgDuration: '4:12',
      conversions: 378
    },
    topPages: [
      { page: '/', visits: 3421, avgTime: '4:32' },
      { page: '/services', visits: 1892, avgTime: '3:45' },
      { page: '/cases', visits: 1234, avgTime: '5:12' },
      { page: '/calculator', visits: 892, avgTime: '6:23' },
    ],
    sources: [
      { name: 'Organic Search', percentage: 45.2 },
      { name: 'Direct', percentage: 28.7 },
      { name: 'Social Media', percentage: 15.3 },
      { name: 'Referral', percentage: 10.8 },
    ]
  };

  // Технические данные
  const technicalData = {
    performance: {
      lighthouse: 95,
      fcp: 1.2,
      lcp: 1.8,
      tti: 2.3,
      cls: 0.02,
      bundleSize: '187 KB',
      gzipped: '64 KB'
    },
    server: {
      uptime: '99.97%',
      responseTime: '245ms',
      requests: '45,234',
      errors: '0.02%'
    },
    deployment: {
      version: '1.2.4',
      lastDeploy: '2 часа назад',
      environment: 'Production',
      region: 'EU-Central'
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 bg-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden border border-amber-500/20"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-amber-500/20 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <h2 className="text-xl font-bold text-white">
                    Admin Panel
                  </h2>
                  {isAuthenticated && (
                    <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                      Авторизован
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {isAuthenticated && (
                    <button
                      onClick={handleLogout}
                      className="text-sm text-slate-400 hover:text-white px-3 py-1 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Выйти
                    </button>
                  )}
                  <button
                    onClick={handleClose}
                    className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="h-[calc(100%-72px)] overflow-y-auto">
                {!isAuthenticated ? (
                  /* Login Form */
                  <div className="flex items-center justify-center h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full max-w-md p-8"
                    >
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Server className="w-8 h-8 text-amber-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Авторизация
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Введите пароль для доступа к панели администратора
                        </p>
                      </div>

                      <form onSubmit={handleAuth} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Пароль
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={inputPassword}
                              onChange={(e) => {
                                setInputPassword(e.target.value);
                                setError('');
                              }}
                              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                              placeholder="Введите пароль"
                              autoFocus
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                            >
                              {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                              ) : (
                                <Eye className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                          {error && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-400 text-sm mt-2"
                            >
                              {error}
                            </motion.p>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                        >
                          Войти
                        </button>
                      </form>

                      <div className="mt-6 text-center text-xs text-slate-500">
                        Совет: Используйте <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">Ctrl</kbd> +
                        <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700 mx-1">Shift</kbd> +
                        <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">A</kbd> для быстрого доступа
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* Dashboard */
                  <div className="p-6">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-6 border-b border-slate-800">
                      {[
                        { id: 'seo' as const, label: 'SEO & Аналитика', icon: BarChart3 },
                        { id: 'technical' as const, label: 'Технические данные', icon: Zap },
                        { id: 'analytics' as const, label: 'Детальная аналитика', icon: Activity }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-4 py-3 rounded-t-lg transition-all ${
                            activeTab === tab.id
                              ? 'bg-slate-800 text-amber-400 border-b-2 border-amber-500'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }`}
                        >
                          <tab.icon className="w-4 h-4" />
                          <span className="font-medium">{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* SEO Tab */}
                    {activeTab === 'seo' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        {/* Period Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { period: 'Сегодня', data: seoData.today },
                            { period: 'Неделя', data: seoData.week },
                            { period: 'Месяц', data: seoData.month }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                              <h3 className="text-amber-400 font-semibold mb-4">{item.period}</h3>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400 text-sm">Визиты</span>
                                  <span className="text-white font-bold">{item.data.visits.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400 text-sm">Просмотры</span>
                                  <span className="text-white font-bold">{item.data.pageviews.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400 text-sm">Уникальные</span>
                                  <span className="text-white font-bold">{item.data.uniqueVisitors.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400 text-sm">Bounce Rate</span>
                                  <span className="text-white font-bold">{item.data.bounceRate}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400 text-sm">Ср. время</span>
                                  <span className="text-white font-bold">{item.data.avgDuration}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                                  <span className="text-slate-400 text-sm">Конверсии</span>
                                  <span className="text-green-400 font-bold">{item.data.conversions}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Top Pages */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-amber-400" />
                            Топ страниц
                          </h3>
                          <div className="space-y-3">
                            {seoData.topPages.map((page, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                  <span className="text-amber-400 font-bold text-sm">#{idx + 1}</span>
                                  <code className="text-slate-300">{page.page}</code>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                  <span className="text-slate-400">{page.visits.toLocaleString()} визитов</span>
                                  <span className="text-slate-400">{page.avgTime} ср. время</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Traffic Sources */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-amber-400" />
                            Источники трафика
                          </h3>
                          <div className="space-y-3">
                            {seoData.sources.map((source, idx) => (
                              <div key={idx}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-slate-300">{source.name}</span>
                                  <span className="text-white font-semibold">{source.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-amber-600 to-amber-400 h-2 rounded-full transition-all"
                                    style={{ width: `${source.percentage}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Technical Tab */}
                    {activeTab === 'technical' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        {/* Performance Metrics */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-400" />
                            Производительность
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">Lighthouse Score</div>
                              <div className="text-2xl font-bold text-green-400">{technicalData.performance.lighthouse}</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">FCP</div>
                              <div className="text-2xl font-bold text-white">{technicalData.performance.fcp}s</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">LCP</div>
                              <div className="text-2xl font-bold text-white">{technicalData.performance.lcp}s</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">TTI</div>
                              <div className="text-2xl font-bold text-white">{technicalData.performance.tti}s</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">CLS</div>
                              <div className="text-2xl font-bold text-green-400">{technicalData.performance.cls}</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">Bundle Size</div>
                              <div className="text-xl font-bold text-white">{technicalData.performance.bundleSize}</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">Gzipped</div>
                              <div className="text-xl font-bold text-white">{technicalData.performance.gzipped}</div>
                            </div>
                          </div>
                        </div>

                        {/* Server Stats */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Server className="w-5 h-5 text-amber-400" />
                            Серверные метрики
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">Uptime</div>
                              <div className="text-2xl font-bold text-green-400">{technicalData.server.uptime}</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">Response Time</div>
                              <div className="text-2xl font-bold text-white">{technicalData.server.responseTime}</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">Requests</div>
                              <div className="text-2xl font-bold text-white">{technicalData.server.requests}</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                              <div className="text-slate-400 text-sm mb-1">Error Rate</div>
                              <div className="text-2xl font-bold text-green-400">{technicalData.server.errors}</div>
                            </div>
                          </div>
                        </div>

                        {/* Deployment Info */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Database className="w-5 h-5 text-amber-400" />
                            Информация о деплое
                          </h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                              <span className="text-slate-400">Версия</span>
                              <span className="text-white font-mono">{technicalData.deployment.version}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                              <span className="text-slate-400">Последний деплой</span>
                              <span className="text-white">{technicalData.deployment.lastDeploy}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                              <span className="text-slate-400">Окружение</span>
                              <span className="text-green-400 font-semibold">{technicalData.deployment.environment}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                              <span className="text-slate-400">Регион</span>
                              <span className="text-white">{technicalData.deployment.region}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Analytics Tab */}
                    {activeTab === 'analytics' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 text-center">
                          <Activity className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                          <h3 className="text-white text-xl font-semibold mb-2">
                            Интеграция с аналитикой
                          </h3>
                          <p className="text-slate-400 mb-6">
                            Здесь будут отображаться данные из Google Analytics и Yandex Metrika через MCP
                          </p>
                          <div className="flex gap-3 justify-center">
                            <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                              <RefreshCw className="w-4 h-4" />
                              Обновить данные
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                              <Download className="w-4 h-4" />
                              Экспорт
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
