import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BarChart3, TrendingUp, Users, Mail, Download } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">Análise detalhada de desempenho</p>
          </div>
          <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
            Exportar Relatório
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total de Leads', value: '1,247', icon: Users, color: 'primary' },
            { label: 'E-mails Enviados', value: '8,543', icon: Mail, color: 'blue' },
            { label: 'Taxa de Abertura', value: '42.3%', icon: TrendingUp, color: 'green' },
            { label: 'Conversões', value: '342', icon: BarChart3, color: 'purple' },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance ao Longo do Tempo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600">Gráfico de linhas com métricas temporais</p>
                  <p className="text-sm text-gray-400 mt-1">Integração com Chart.js ou Recharts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Canais de Comunicação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { channel: 'E-mail', value: 65, color: 'blue' },
                  { channel: 'WhatsApp', value: 25, color: 'green' },
                  { channel: 'LinkedIn', value: 10, color: 'primary' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.channel}</span>
                      <span className="text-sm text-gray-600">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${item.color}-500 rounded-full transition-all duration-500`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
