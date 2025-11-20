import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import {
  BarChart3,
  Target,
  Zap,
  Users,
  TrendingUp,
  MapPin,
  Mail,
  MessageSquare,
  Linkedin,
  ArrowRight,
  Check,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-heading font-bold text-2xl gradient-text">Driva</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/register">
              <Button variant="primary">Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 animate-slideInFromBottom">
            Inteligência Comercial
            <br />
            <span className="gradient-text">que Impulsiona Vendas</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slideInFromBottom">
            Mapeie o mercado, identifique oportunidades e automatize sua prospecção com
            inteligência artificial. Tudo em uma única plataforma.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideInFromBottom">
            <Link href="/register">
              <Button size="lg" variant="primary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Começar Agora - Grátis
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Ver Demonstração
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10M+', label: 'Empresas Mapeadas' },
              { value: '87%', label: 'Taxa de Conversão' },
              { value: '3x', label: 'Aumento no ROI' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Tudo que você precisa para
              <span className="gradient-text"> Vender Mais</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ferramentas poderosas que transformam dados em oportunidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'ICP Inteligente',
                description:
                  'Defina seu perfil de cliente ideal e encontre empresas que combinam perfeitamente',
                color: 'text-primary-600',
                bg: 'bg-primary-100',
              },
              {
                icon: MapPin,
                title: 'Mapa de Mercado',
                description:
                  'Visualize oportunidades geograficamente e identifique regiões de alto potencial',
                color: 'text-secondary-600',
                bg: 'bg-secondary-100',
              },
              {
                icon: Users,
                title: 'Enriquecimento de Dados',
                description:
                  'Dados completos de empresas: e-mail, telefone, WhatsApp, LinkedIn e mais',
                color: 'text-green-600',
                bg: 'bg-green-100',
              },
              {
                icon: Zap,
                title: 'Automação Multicanal',
                description:
                  'Cadências automatizadas por e-mail, WhatsApp e LinkedIn com IA',
                color: 'text-amber-600',
                bg: 'bg-amber-100',
              },
              {
                icon: BarChart3,
                title: 'Analytics Avançado',
                description:
                  'Dashboards em tempo real com métricas que importam para seu negócio',
                color: 'text-purple-600',
                bg: 'bg-purple-100',
              },
              {
                icon: TrendingUp,
                title: 'IA Copilot',
                description:
                  'Sugestões inteligentes de abordagem, horários e scripts personalizados',
                color: 'text-pink-600',
                bg: 'bg-pink-100',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Em 4 passos simples, transforme sua prospecção
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Defina seu ICP',
                description: 'Configure seu perfil de cliente ideal com critérios específicos',
              },
              {
                step: '02',
                title: 'Mapeie o Mercado',
                description: 'Visualize e identifique as melhores oportunidades',
              },
              {
                step: '03',
                title: 'Enriqueça os Dados',
                description: 'Obtenha contatos completos automaticamente',
              },
              {
                step: '04',
                title: 'Automatize a Prospecção',
                description: 'Configure cadências inteligentes e converta mais',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{item.step}</div>
                <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-primary-400">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Pronto para Multiplicar suas Vendas?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Junte-se a centenas de empresas que já transformaram sua prospecção com Driva
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Começar Gratuitamente
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Falar com Vendas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-heading font-bold text-2xl text-white">Driva</span>
          </div>
          <p className="mb-4">Inteligência Comercial B2B que Transforma Vendas</p>
          <p className="text-sm">© 2024 Driva by Matheus. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
