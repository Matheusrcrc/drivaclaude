import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input, Select } from '@/components/ui/Input'
import { Plus, Edit, Trash2, Target, Users } from 'lucide-react'
import { mockICPProfiles } from '@/lib/mockData'
import { formatDate } from '@/lib/utils'

export default function ICPPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">
              Perfis de Cliente Ideal (ICP)
            </h1>
            <p className="text-gray-600 mt-1">Defina e gerencie seus perfis de cliente ideal</p>
          </div>
          <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
            Novo Perfil ICP
          </Button>
        </div>

        {/* ICP List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockICPProfiles.map((icp) => (
            <Card key={icp.id} hover>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{icp.name}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{icp.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-t border-gray-200">
                    <span className="text-sm text-gray-600">Empresas compatíveis</span>
                    <span className="text-lg font-bold text-primary-600">
                      {icp.matchedCompanies}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase">Critérios:</p>
                    <div className="flex flex-wrap gap-2">
                      {icp.criteria.sectors.slice(0, 3).map((sector, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-500">
                      Criado em {formatDate(icp.createdAt)}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        icp.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {icp.status === 'active' ? 'Ativo' : 'Rascunho'}
                    </span>
                  </div>

                  <div className="flex gap-2 pt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create new ICP form */}
        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Perfil ICP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Nome do Perfil" placeholder="Ex: E-commerce Médio Porte" />
              <Select
                label="Setor Principal"
                options={[
                  { value: '', label: 'Selecione...' },
                  { value: 'ecommerce', label: 'E-commerce' },
                  { value: 'saas', label: 'SaaS' },
                  { value: 'industria', label: 'Indústria' },
                ]}
              />
              <Input label="Faturamento Mínimo (R$)" type="number" placeholder="1000000" />
              <Input label="Faturamento Máximo (R$)" type="number" placeholder="10000000" />
              <Input label="Número Mínimo de Funcionários" type="number" placeholder="10" />
              <Input label="Número Máximo de Funcionários" type="number" placeholder="100" />
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="primary">Salvar Perfil</Button>
              <Button variant="outline">Cancelar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
