'use client'

import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? '5rem' : '16rem' }}
      >
        <TopBar showMenuButton onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
