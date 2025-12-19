'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Перенаправляем на главную с параметром admin=true
    router.push('/?admin=true')
  }, [router])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
        <p className="text-slate-400">Открываем админ-панель...</p>
      </div>
    </div>
  )
}
