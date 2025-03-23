'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, FileText, Settings, Plus, Edit, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, UserIcon } from 'lucide-react'

interface SidebarItem {
  icon: React.ElementType
  label: string
  href: string
}

const sidebarItems: SidebarItem[] = [
  { icon: FileText, label: 'Request Certificate', href: '/manage-device/request-certificate' },
  { icon: Plus, label: 'Request Registration', href: '/manage-device/request-registration' },
  { icon: Edit, label: 'Edit Device', href: '/manage-device/edit' },
  { icon: Trash2, label: 'Delete Device', href: '/manage-device/delete' },
]

export function DeviceManagerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-green-100 bg-white">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-green-100 px-4">
            <Link href="/manage-device" className="text-2xl font-bold text-green-600">
              Device Manager
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

      <div className="pl-64">
        <header className="flex h-16 items-center justify-between border-b border-green-100 bg-white px-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            {sidebarItems.find(item => item.href === pathname)?.label || 'Device Manager'}
          </h1>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-600 hover:text-green-600 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    2
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-auto">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                    <p className="text-sm font-medium">Device Registration Approved</p>
                    <p className="text-xs text-gray-500">Your device Wind Turbine A1 has been approved</p>
                    <p className="text-xs text-gray-400">5 minutes ago</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                    <p className="text-sm font-medium">Certificate Request Processed</p>
                    <p className="text-xs text-gray-500">Certificate request for Solar Panel B2 is ready</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-medium hover:bg-green-700 transition-colors">
                  DM
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2">
                  <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-medium">
                    DM
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Device Manager</p>
                    <p className="text-xs text-gray-500">manager@powerchain.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

