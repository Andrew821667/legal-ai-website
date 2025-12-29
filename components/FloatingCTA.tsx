"use client";

import { useEffect, useState, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

export default function FloatingCTA() {
  const [buttonPosition, setButtonPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<MousePosition>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Устанавливаем начальную позицию в правом нижнем углу
  useEffect(() => {
    if (typeof window === 'undefined') return;

    setButtonPosition({
      x: window.innerWidth - 140, // Учитываем увеличенный размер кнопки
      y: window.innerHeight - 80
    });

    // Показываем кнопку сразу
    setIsVisible(true);
  }, []);

  // Логика drag & drop
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setButtonPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Обработчик начала перетаскивания
  const handleMouseDown = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsDragging(true);
    e.preventDefault();
  };

  // Вычисляем позицию кнопки относительно экрана (увеличенная овальная кнопка)
  const buttonWidth = 160; // Увеличена в 2 раза от 80
  const buttonHeight = 80; // Овальная форма
  const constrainedX = typeof window !== 'undefined'
    ? Math.max(buttonWidth / 2, Math.min(window.innerWidth - buttonWidth / 2, buttonPosition.x))
    : buttonPosition.x;
  const constrainedY = typeof window !== 'undefined'
    ? Math.max(buttonHeight / 2, Math.min(window.innerHeight - buttonHeight / 2, buttonPosition.y))
    : buttonPosition.y;

  return (
    <>
      {/* Большая овальная кнопка */}
      <a
        ref={buttonRef}
        href="https://t.me/legal_ai_helper_new_bot"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-50 transition-all duration-300 transform w-40 h-20 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
        } ${
          isHovered ? 'scale-105' : 'scale-100'
        } ${
          isDragging ? 'cursor-grabbing' : 'cursor-pointer'
        }`}
        style={{
          left: constrainedX - buttonWidth / 2,
          top: constrainedY - buttonHeight / 2,
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
      >
        {/* Фон с градиентом - овальная форма */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-2xl">
          {/* Пульсирующий эффект */}
          <div className="absolute inset-0 bg-amber-300 rounded-full animate-ping opacity-20"></div>

          {/* Свечение при наведении */}
          {isHovered && (
            <div className="absolute inset-0 bg-white rounded-full opacity-30 animate-pulse"></div>
          )}
        </div>

        {/* Иконка и текст */}
        <div className="relative flex items-center justify-center h-full text-white font-semibold px-4">
          <MessageCircle className="w-6 h-6 mr-2 flex-shrink-0" />
          <span className="text-sm whitespace-nowrap">Связаться с нами</span>
        </div>
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
