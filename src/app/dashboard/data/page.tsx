import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Upload, Download, FileSpreadsheet, FileText, Database } from 'lucide-react'

export default function DataPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Gestão de Dados</h1>
            <p className="text-gray-600 mt-1">Importe e exporte suas listas de leads</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Upload className="w-6 h-6 text-primary-600" />
                <CardTitle>Importar Dados</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition-colors cursor-pointer">
                <FileSpreadsheet className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-900 font-medium mb-2">
                  Arraste e solte seus arquivos aqui
                </p>
                <p className="text-sm text-gray-500 mb-4">ou clique para selecionar</p>
                <p className="text-xs text-gray-400">Suporta CSV, XLSX, JSON</p>
              </div>
              <div className="mt-6 space-y-2">
                <Button variant="primary" className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Selecionar Arquivo
                </Button>
                <Button variant="outline" className="w-full">
                  Baixar Template
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Download className="w-6 h-6 text-green-600" />
                <CardTitle>Exportar Dados</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Exportar Leads</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Exporte sua lista completa de leads com todos os dados enriquecidos
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileSpreadsheet className="w-4 h-4 mr-1" />
                      CSV
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileSpreadsheet className="w-4 h-4 mr-1" />
                      XLSX
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Exportar Campanhas</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Exporte os resultados das suas campanhas de prospecção
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <FileText className="w-4 h-4 mr-1" />
                    Gerar Relatório
                  </Button>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Backup Completo</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Faça backup de todos os seus dados
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Database className="w-4 h-4 mr-1" />
                    Download Backup
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
