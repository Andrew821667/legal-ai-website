import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword } from '@/lib/auth';
import { SignJWT } from 'jose';

// Хеш пароля из переменных окружения
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';

// JWT secret из переменных окружения
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

/**
 * POST /api/auth/login
 * Серверная аутентификация для Admin Panel
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Валидация
    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      );
    }

    // Проверка что хеш настроен
    if (!ADMIN_PASSWORD_HASH) {
      console.error('ADMIN_PASSWORD_HASH not configured in environment variables');
      return NextResponse.json(
        { success: false, error: 'Authentication not configured' },
        { status: 500 }
      );
    }

    // Верификация пароля с использованием bcrypt
    const isValid = await verifyPassword(password, ADMIN_PASSWORD_HASH);

    if (!isValid) {
      // Добавляем задержку для защиты от brute-force
      await new Promise(resolve => setTimeout(resolve, 1000));

      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Генерация JWT токена
    const token = await new SignJWT({ role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h') // Токен действителен 24 часа
      .sign(JWT_SECRET);

    // Возвращаем токен
    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful'
    });

    // Устанавливаем токен в httpOnly cookie для безопасности
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 часа
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
