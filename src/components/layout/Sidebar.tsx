'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  MapPin,
  List,
  Workflow,
  Database,
  Settings,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'ICP', href: '/dashboard/icp', icon: Users },
  { name: 'Mapa de Mercado', href: '/dashboard/market-map', icon: MapPin },
  { name: 'Construtor de Listas', href: '/dashboard/list-builder', icon: List },
  { name: 'Fluxos', href: '/dashboard/workflows', icon: Workflow },
  { name: 'Dados', href: '/dashboard/data', icon: Database },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Administração', href: '/dashboard/admin', icon: Settings },
]

interface SidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onToggle }) => {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg z-40 transition-all duration-300',
        collapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          {!collapsed && (
            <span className="font-heading font-bold text-xl gradient-text">
              Driva
            </span>
          )}
        </Link>
        {onToggle && (
          <button
            onClick={onToggle}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            )}
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 flex-shrink-0',
                  isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-700'
                )}
              />
              {!collapsed && (
                <span className="font-medium text-sm">{item.name}</span>
              )}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-600" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* User Info */}
      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-semibold">
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Matheus</p>
              <p className="text-xs text-gray-500 truncate">Admin</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
