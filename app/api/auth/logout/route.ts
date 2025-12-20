import { NextResponse } from 'next/server';

/**
 * POST /api/auth/logout
 * Выход из системы - удаление токена
 */
export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully'
  });

  // Удаляем cookie с токеном
  response.cookies.delete('admin_token');

  return response;
}
