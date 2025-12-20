import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

/**
 * GET /api/auth/verify
 * Проверка валидности JWT токена
 */
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false, error: 'No token provided' },
        { status: 401 }
      );
    }

    // Верификация JWT токена
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);

      // Проверяем что это admin токен
      if (payload.role !== 'admin') {
        return NextResponse.json(
          { authenticated: false, error: 'Invalid token role' },
          { status: 403 }
        );
      }

      return NextResponse.json({
        authenticated: true,
        role: payload.role
      });

    } catch (jwtError) {
      // Токен невалиден или истек
      return NextResponse.json(
        { authenticated: false, error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json(
      { authenticated: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
