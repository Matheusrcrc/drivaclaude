import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { KPICard } from '@/components/dashboard/KPICard'
import { FunnelChart } from '@/components/dashboard/FunnelChart'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  TrendingUp,
  DollarSign,
  Target,
  Zap,
  Plus,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Users,
} from 'lucide-react'
import {
  mockDashboardStats,
  mockOpportunityRanks,
  mockFunnelStages,
  mockRecentActivities,
} from '@/lib/mockData'
import { formatCurrency, formatRelativeTime } from '@/lib/utils'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Visão geral do seu desempenho comercial</p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/icp">
              <Button variant="outline" leftIcon={<Plus className="w-4 h-4" />}>
                Novo ICP
              </Button>
            </Link>
            <Link href="/dashboard/workflows">
              <Button variant="primary" leftIcon={<Zap className="w-4 h-4" />}>
                Nova Cadência
              </Button>
            </Link>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Potencial de Mercado"
            value={formatCurrency(mockDashboardStats.marketPotential)}
            trend={mockDashboardStats.trends.marketPotential}
            icon={<TrendingUp className="w-6 h-6" />}
            iconColor="text-primary-600"
            iconBg="bg-primary-100"
          />
          <KPICard
            title="ROI Médio"
            value={`${mockDashboardStats.roi}%`}
            trend={mockDashboardStats.trends.roi}
            icon={<DollarSign className="w-6 h-6" />}
            iconColor="text-green-600"
            iconBg="bg-green-100"
          />
          <KPICard
            title="Taxa de Conversão"
            value={`${mockDashboardStats.conversionRate}%`}
            trend={mockDashboardStats.trends.conversionRate}
            icon={<Target className="w-6 h-6" />}
            iconColor="text-purple-600"
            iconBg="bg-purple-100"
          />
          <KPICard
            title="Campanhas Ativas"
            value={mockDashboardStats.activeCampaigns}
            trend={mockDashboardStats.trends.activeCampaigns}
            icon={<Zap className="w-6 h-6" />}
            iconColor="text-amber-600"
            iconBg="bg-amber-100"
          />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Opportunities ranking */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Oportunidades Ranqueadas</CardTitle>
                <Link href="/dashboard/list-builder">
                  <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Ver Todas
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Score
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Empresa
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Setor
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Localização
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Potencial
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOpportunityRanks.map((opp) => (
                      <tr key={opp.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-600">
                                {opp.score}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-medium text-gray-900">{opp.companyName}</span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{opp.sector}</td>
                        <td className="py-3 px-4 text-gray-600">{opp.location}</td>
                        <td className="py-3 px-4">
                          <span className="font-semibold text-green-600">{opp.potential}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              opp.status === 'proposal'
                                ? 'bg-purple-100 text-purple-800'
                                : opp.status === 'qualified'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {opp.status === 'proposal'
                              ? 'Proposta'
                              : opp.status === 'qualified'
                              ? 'Qualificado'
                              : 'Novo'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recent activities */}
          <Card>
            <CardHeader>
              <CardTitle>Atividades Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    {activity.avatar ? (
                      <img
                        src={activity.avatar}
                        alt={activity.user}
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-500" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatRelativeTime(activity.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Funnel chart */}
        <FunnelChart stages={mockFunnelStages} />

        {/* Quick actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link href="/dashboard/list-builder">
                <button className="flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="font-medium text-gray-900">Criar Lista</span>
                  <span className="text-xs text-gray-500 mt-1">de Leads</span>
                </button>
              </Link>

              <Link href="/dashboard/workflows">
                <button className="flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">Nova Cadência</span>
                  <span className="text-xs text-gray-500 mt-1">E-mail/WhatsApp</span>
                </button>
              </Link>

              <Link href="/dashboard/market-map">
                <button className="flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">Mapear Mercado</span>
                  <span className="text-xs text-gray-500 mt-1">Novas oportunidades</span>
                </button>
              </Link>

              <Link href="/dashboard/analytics">
                <button className="flex flex-col items-center p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <span className="font-medium text-gray-900">Ver Analytics</span>
                  <span className="text-xs text-gray-500 mt-1">Relatórios</span>
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
