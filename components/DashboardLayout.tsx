'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, Home, Laptop, FileText, ShoppingCart, User, Settings, Activity, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarItem {
  icon: React.ElementType
  label: string
  href: string
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Laptop, label: 'Device Management', href: '/manage-device' },
  { icon: FileText, label: 'Certificate Issuance', href: '/dashboard/certificates' },
  { icon: ShoppingCart, label: 'Marketplace', href: '/marketplace' },
  { icon: Users, label: 'Platform Admin', href: '/platform-admin' },
  { icon: User, label: 'Profile', href: '/dashboard/profile' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: Activity, label: 'Activity Log', href: '/dashboard/activity' },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-green-100 bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-green-100 px-4">
            <Link href="/" className="text-2xl font-bold text-green-600">
              PowerChain
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center rounded-lg px-4 py-2 text-sm font-medium',
                      isActive
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="pl-64">
        <header className="flex h-16 items-center justify-between border-b border-green-100 bg-white px-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            {sidebarItems.find(item => item.href === pathname)?.label || 'Dashboard'}
          </h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-green-600">
              <Bell className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-medium">
                JD
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

