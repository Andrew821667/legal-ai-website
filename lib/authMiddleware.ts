import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

/**
 * Auth Middleware для защиты API endpoints
 * Проверяет наличие и валидность JWT токена
 */
export async function requireAuth(request: NextRequest): Promise<{
  authenticated: boolean;
  response?: NextResponse;
  payload?: any;
}> {
  try {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return {
        authenticated: false,
        response: NextResponse.json(
          { error: 'Authentication required' },
          { status: 401 }
        )
      };
    }

    // Верификация JWT токена
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);

      // Проверяем роль
      if (payload.role !== 'admin') {
        return {
          authenticated: false,
          response: NextResponse.json(
            { error: 'Insufficient permissions' },
            { status: 403 }
          )
        };
      }

      return {
        authenticated: true,
        payload
      };

    } catch (jwtError) {
      // Токен невалиден или истек
      return {
        authenticated: false,
        response: NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401 }
        )
      };
    }

  } catch (error) {
    console.error('Auth middleware error:', error);
    return {
      authenticated: false,
      response: NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    };
  }
}

/**
 * Wrapper для защищенных API routes
 *
 * Использование:
 * export async function GET(request: NextRequest) {
 *   return withAuth(request, async () => {
 *     // Ваш защищенный код
 *     return NextResponse.json({ data: 'protected data' });
 *   });
 * }
 */
export async function withAuth(
  request: NextRequest,
  handler: () => Promise<NextResponse>
): Promise<NextResponse> {
  const authResult = await requireAuth(request);

  if (!authResult.authenticated) {
    return authResult.response!;
  }

  return handler();
}
