import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { mockLeads } from '@/lib/mockData'
import { Download, Mail, MessageSquare, CheckSquare, Filter } from 'lucide-react'

export default function ListBuilderPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Construtor de Listas</h1>
            <p className="text-gray-600 mt-1">Gerencie e enriqueça seus leads</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" leftIcon={<Filter className="w-4 h-4" />}>
              Filtros
            </Button>
            <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
              Exportar
            </Button>
          </div>
        </div>

        {/* Bulk actions */}
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Ações em massa:</span>
              <Button variant="outline" size="sm" leftIcon={<Mail className="w-4 h-4" />}>
                Enriquecer E-mails
              </Button>
              <Button variant="outline" size="sm" leftIcon={<MessageSquare className="w-4 h-4" />}>
                Enriquecer WhatsApp
              </Button>
              <Button variant="outline" size="sm" leftIcon={<CheckSquare className="w-4 h-4" />}>
                Adicionar à Cadência
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leads table */}
        <Card>
          <CardHeader>
            <CardTitle>Leads ({mockLeads.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Score
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Empresa
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Contato
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Setor
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Enriquecimento
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mockLeads.map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-3 px-4">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-600">
                            {lead.score}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{lead.company.name}</p>
                          <p className="text-xs text-gray-500">{lead.company.location.city}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {lead.contactPerson ? (
                          <div>
                            <p className="text-sm text-gray-900">{lead.contactPerson.name}</p>
                            <p className="text-xs text-gray-500">{lead.contactPerson.position}</p>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400">Sem contato</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-600">{lead.company.sector}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.status === 'qualified'
                              ? 'bg-blue-100 text-blue-800'
                              : lead.status === 'proposal'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {lead.status === 'qualified'
                            ? 'Qualificado'
                            : lead.status === 'proposal'
                            ? 'Proposta'
                            : 'Novo'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.company.enrichmentStatus === 'complete'
                              ? 'bg-green-100 text-green-800'
                              : lead.company.enrichmentStatus === 'partial'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {lead.company.enrichmentStatus === 'complete'
                            ? 'Completo'
                            : lead.company.enrichmentStatus === 'partial'
                            ? 'Parcial'
                            : 'Pendente'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          Ver Detalhes
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
