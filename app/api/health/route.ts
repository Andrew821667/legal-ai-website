import { NextResponse } from 'next/server';

/**
 * Health check endpoint
 *
 * Простой endpoint для проверки работоспособности API
 * Может использоваться мониторингами и load balancers
 */

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
