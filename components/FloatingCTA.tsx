"use client";

import { useEffect, useState, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

export default function FloatingCTA() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const animationRef = useRef<number | null>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Следим за позицией мыши
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Показываем кнопку после прокрутки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Анимация плавного движения кнопки за курсором
  useEffect(() => {
    if (!isVisible || isDragging) return;

    const animate = () => {
      setButtonPosition(prev => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        // Уменьшаем скорость движения для плавности
        const speed = isHovered ? 0.15 : 0.08;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Если курсор близко к кнопке, замедляем движение
        const proximityFactor = Math.max(0.1, Math.min(1, distance / 200));

        return {
          x: prev.x + dx * speed * proximityFactor,
          y: prev.y + dy * speed * proximityFactor,
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isVisible, isHovered, isDragging]);

  // Обработчик клика для минимизации кнопки
  const handleMinimize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMinimized(!isMinimized);
  };

  // Обработчик начала перетаскивания
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMinimized) return;
    setIsDragging(true);
    e.preventDefault();
  };

  // Обработчик окончания перетаскивания
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  // Вычисляем позицию кнопки относительно экрана
  const buttonSize = isMinimized ? 60 : 80;
  const constrainedX = Math.max(buttonSize / 2, Math.min(window.innerWidth - buttonSize / 2, buttonPosition.x));
  const constrainedY = Math.max(buttonSize / 2, Math.min(window.innerHeight - buttonSize / 2, buttonPosition.y));

  return (
    <>
      {/* Оверлей для подсказки */}
      {isVisible && !isMinimized && (
        <div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-slate-900/90 text-white px-4 py-2 rounded-lg text-sm pointer-events-none opacity-0 animate-fade-in"
          style={{
            animation: 'fadeIn 0.5s ease-out forwards, fadeOut 0.5s ease-out 3s forwards'
          }}
        >
          Кнопка следует за вашим курсором! Попробуйте навести на неё
        </div>
      )}

      {/* Основная кнопка */}
      <a
        ref={buttonRef}
        href="https://t.me/legal_ai_helper_new_bot"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-50 transition-all duration-300 transform ${
          isMinimized ? 'w-15 h-15' : 'w-20 h-20'
        } ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
        } ${
          isHovered ? 'scale-110' : 'scale-100'
        } ${
          isDragging ? 'cursor-grabbing' : 'cursor-pointer'
        }`}
        style={{
          left: constrainedX - (isMinimized ? 30 : 40),
          top: constrainedY - (isMinimized ? 30 : 40),
          transition: isDragging ? 'none' : 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
      >
        {/* Фон с градиентом */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-2xl">
          {/* Пульсирующий эффект */}
          <div className="absolute inset-0 bg-amber-300 rounded-full animate-ping opacity-20"></div>

          {/* Свечение при наведении */}
          {isHovered && (
            <div className="absolute inset-0 bg-white rounded-full opacity-30 animate-pulse"></div>
          )}
        </div>

        {/* Иконка и текст */}
        <div className="relative flex flex-col items-center justify-center h-full text-white font-semibold">
          {isMinimized ? (
            <MessageCircle className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-8 h-8 mb-1" />
              <span className="text-xs text-center leading-tight">Связаться<br />с нами</span>
            </>
          )}
        </div>

        {/* Кнопка минимизации */}
        {!isMinimized && (
          <button
            onClick={handleMinimize}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white text-xs transition-colors"
            title="Свернуть"
          >
            <X className="w-3 h-3" />
          </button>
        )}

        {/* Восстановление кнопки при клике на минимизированную версию */}
        {isMinimized && (
          <div
            className="absolute inset-0 rounded-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsMinimized(false);
            }}
            title="Развернуть"
          />
        )}
      </a>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes fadeOut {
          from { opacity: 1; transform: translateX(-50%) translateY(0); }
          to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
      `}</style>
    </>
  );
}
