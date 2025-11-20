import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input, Select } from '@/components/ui/Input'
import { MapPin, Filter, Download, TrendingUp } from 'lucide-react'
import { mockSectors, mockLocations } from '@/lib/mockData'

export default function MarketMapPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Mapa de Mercado</h1>
            <p className="text-gray-600 mt-1">
              Visualize oportunidades geograficamente e identifique regiões de alto potencial
            </p>
          </div>
          <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
            Exportar Dados
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters sidebar */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary-600" />
                <CardTitle>Filtros</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select
                  label="Setor"
                  options={[
                    { value: '', label: 'Todos os setores' },
                    ...mockSectors.map((s) => ({ value: s, label: s })),
                  ]}
                />

                <Select
                  label="Estado"
                  options={[
                    { value: '', label: 'Todos os estados' },
                    ...mockLocations.states.map((s) => ({ value: s, label: s })),
                  ]}
                />

                <Input label="Faturamento Mínimo (R$)" type="number" placeholder="1000000" />

                <Input label="Número de Funcionários" type="number" placeholder="50" />

                <div className="pt-4 space-y-2">
                  <Button variant="primary" size="sm" className="w-full">
                    Aplicar Filtros
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full">
                    Limpar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map visualization */}
          <div className="lg:col-span-3 space-y-6">
            {/* Heatmap placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Heatmap de Oportunidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary-100 via-purple-100 to-secondary-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Visualização Interativa do Mapa
                    </h3>
                    <p className="text-gray-600">
                      Aqui seria exibido um mapa interativo com heatmap de densidade de empresas
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Integração com Mapbox, Leaflet ou D3.js
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-10 left-10 w-24 h-24 bg-primary-500/20 rounded-full blur-xl" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl" />
                </div>
              </CardContent>
            </Card>

            {/* Top regions */}
            <Card>
              <CardHeader>
                <CardTitle>Regiões com Maior Potencial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: 'São Paulo - SP',
                      companies: 4523,
                      potential: 'R$ 45M',
                      density: 95,
                    },
                    {
                      name: 'Rio de Janeiro - RJ',
                      companies: 2841,
                      potential: 'R$ 28M',
                      density: 78,
                    },
                    {
                      name: 'Belo Horizonte - MG',
                      companies: 1653,
                      potential: 'R$ 16M',
                      density: 62,
                    },
                    {
                      name: 'Campinas - SP',
                      companies: 1247,
                      potential: 'R$ 12M',
                      density: 54,
                    },
                  ].map((region, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{region.name}</h4>
                        <p className="text-sm text-gray-600">
                          {region.companies} empresas • Potencial: {region.potential}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">{region.density}</div>
                        <div className="text-xs text-gray-500">Score</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
