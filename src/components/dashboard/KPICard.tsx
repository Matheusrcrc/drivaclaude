import React from 'react'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string | number
  trend?: number
  icon: React.ReactNode
  iconColor?: string
  iconBg?: string
  format?: 'currency' | 'number' | 'percent'
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  trend,
  icon,
  iconColor = 'text-primary-600',
  iconBg = 'bg-primary-100',
}) => {
  const trendIsPositive = trend && trend > 0
  const trendIsNegative = trend && trend < 0

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
          {trend !== undefined && (
            <div className="flex items-center gap-1">
              {trendIsPositive && <TrendingUp className="w-4 h-4 text-green-600" />}
              {trendIsNegative && <TrendingDown className="w-4 h-4 text-red-600" />}
              <span
                className={cn(
                  'text-sm font-medium',
                  trendIsPositive && 'text-green-600',
                  trendIsNegative && 'text-red-600',
                  !trendIsPositive && !trendIsNegative && 'text-gray-600'
                )}
              >
                {trend > 0 && '+'}
                {trend}% este mês
              </span>
            </div>
          )}
        </div>
        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', iconBg)}>
          <div className={iconColor}>{icon}</div>
        </div>
      </div>
    </Card>
  )
}
