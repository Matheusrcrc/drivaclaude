import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { mockWorkflows, mockAISuggestions } from '@/lib/mockData'
import { Plus, Play, Pause, Edit, Trash2, Zap, Mail, MessageSquare, Linkedin, Clock } from 'lucide-react'

export default function WorkflowsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">
              Fluxos de Prospecção
            </h1>
            <p className="text-gray-600 mt-1">
              Automatize sua prospecção com cadências multicanal
            </p>
          </div>
          <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />}>
            Nova Cadência
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Workflows list */}
          <div className="lg:col-span-2 space-y-6">
            {mockWorkflows.map((workflow) => (
              <Card key={workflow.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle>{workflow.name}</CardTitle>
                          <p className="text-sm text-gray-500 mt-1">{workflow.description}</p>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        workflow.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : workflow.status === 'paused'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {workflow.status === 'active'
                        ? 'Ativo'
                        : workflow.status === 'paused'
                        ? 'Pausado'
                        : 'Rascunho'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Steps preview */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      Passos da Cadência ({workflow.steps.length}):
                    </p>
                    <div className="space-y-2">
                      {workflow.steps.slice(0, 3).map((step, index) => (
                        <div
                          key={step.id}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            {step.type === 'send_email' && (
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-600" />
                                <span className="text-sm">E-mail: {step.content.subject}</span>
                              </div>
                            )}
                            {step.type === 'send_whatsapp' && (
                              <div className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-green-600" />
                                <span className="text-sm">WhatsApp</span>
                              </div>
                            )}
                            {step.type === 'wait' && (
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-600" />
                                <span className="text-sm">
                                  Aguardar {step.delay} {step.delayUnit === 'days' ? 'dias' : 'horas'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance metrics */}
                  <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {workflow.performance.totalLeads}
                      </div>
                      <div className="text-xs text-gray-500">Total Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {workflow.performance.opened}
                      </div>
                      <div className="text-xs text-gray-500">Aberturas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {workflow.performance.clicked}
                      </div>
                      <div className="text-xs text-gray-500">Cliques</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {workflow.performance.conversions}
                      </div>
                      <div className="text-xs text-gray-500">Conversões</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {workflow.status === 'active' ? (
                      <Button variant="outline" size="sm" leftIcon={<Pause className="w-4 h-4" />}>
                        Pausar
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<Play className="w-4 h-4" />}
                      >
                        Ativar
                      </Button>
                    )}
                    <Button variant="outline" size="sm" leftIcon={<Edit className="w-4 h-4" />}>
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Copilot sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  <CardTitle>IA Copilot</CardTitle>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Sugestões inteligentes para suas cadências
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAISuggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      className="p-4 bg-amber-50 border border-amber-200 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-sm text-gray-900">
                          {suggestion.title}
                        </h4>
                        <span className="text-xs text-amber-600 font-medium">
                          {suggestion.confidence}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{suggestion.description}</p>
                      {suggestion.content && (
                        <p className="text-sm font-medium text-gray-900 mb-3 p-2 bg-white rounded">
                          {suggestion.content}
                        </p>
                      )}
                      <Button variant="outline" size="sm" className="w-full">
                        Usar Sugestão
                      </Button>
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
