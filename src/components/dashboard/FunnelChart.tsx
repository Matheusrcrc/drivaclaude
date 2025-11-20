'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { FunnelStage } from '@/types'
import { formatCurrency, formatNumber } from '@/lib/utils'

interface FunnelChartProps {
  stages: FunnelStage[]
}

export const FunnelChart: React.FC<FunnelChartProps> = ({ stages }) => {
  const maxCount = Math.max(...stages.map((s) => s.count))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Funil de Vendas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const widthPercentage = (stage.count / maxCount) * 100
            const colors = [
              'bg-primary-500',
              'bg-purple-500',
              'bg-secondary-500',
              'bg-pink-500',
              'bg-green-500',
            ]

            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{stage.name}</span>
                  <span className="text-gray-600">
                    {formatNumber(stage.count)} leads ({stage.percentage.toFixed(1)}%)
                  </span>
                </div>
                <div className="relative w-full h-12 bg-gray-100 rounded-lg overflow-hidden">
                  <div
                    className={`h-full ${colors[index % colors.length]} transition-all duration-500 flex items-center justify-between px-4`}
                    style={{ width: `${widthPercentage}%` }}
                  >
                    <span className="text-white font-semibold text-sm">{stage.name}</span>
                    <span className="text-white font-semibold text-sm">
                      {formatCurrency(stage.value)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
