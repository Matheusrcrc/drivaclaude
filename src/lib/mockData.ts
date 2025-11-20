import {
  User,
  ICPProfile,
  Company,
  Lead,
  Workflow,
  DashboardStats,
  OpportunityRank,
  FunnelStage,
  RecentActivity,
  AISuggestion,
  Notification,
} from '@/types'

// ==================== USUÁRIOS MOCKADOS ====================

export const mockUser: User = {
  id: '1',
  name: 'Matheus',
  email: 'matheus@driva.com.br',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Matheus',
  role: 'admin',
  company: 'Driva',
  createdAt: new Date('2024-01-01'),
  lastLogin: new Date(),
}

export const mockUsers: User[] = [
  mockUser,
  {
    id: '2',
    name: 'Ana Silva',
    email: 'ana@driva.com.br',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    role: 'manager',
    company: 'Driva',
    createdAt: new Date('2024-01-15'),
    lastLogin: new Date(Date.now() - 3600000),
  },
  {
    id: '3',
    name: 'Carlos Santos',
    email: 'carlos@driva.com.br',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    role: 'user',
    company: 'Driva',
    createdAt: new Date('2024-02-01'),
    lastLogin: new Date(Date.now() - 7200000),
  },
]

// ==================== PERFIS ICP MOCKADOS ====================

export const mockICPProfiles: ICPProfile[] = [
  {
    id: '1',
    name: 'E-commerce Médio Porte',
    description: 'Empresas de e-commerce com faturamento entre R$ 1M e R$ 10M',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-03-15'),
    status: 'active',
    matchedCompanies: 342,
    criteria: {
      sectors: ['Comércio Eletrônico', 'Varejo Online'],
      locations: [
        { country: 'Brasil', state: 'SP' },
        { country: 'Brasil', state: 'RJ' },
      ],
      companySize: { min: 'medium', max: 'large' },
      revenue: { min: 1000000, max: 10000000, currency: 'BRL' },
      employees: { min: 10, max: 100 },
      technologies: ['Shopify', 'WooCommerce', 'Magento'],
    },
  },
  {
    id: '2',
    name: 'SaaS B2B Startups',
    description: 'Startups SaaS B2B em fase de crescimento',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-10'),
    status: 'active',
    matchedCompanies: 156,
    criteria: {
      sectors: ['Software', 'Tecnologia', 'SaaS'],
      locations: [{ country: 'Brasil' }],
      companySize: { min: 'small', max: 'medium' },
      revenue: { min: 500000, max: 5000000, currency: 'BRL' },
      employees: { min: 5, max: 50 },
    },
  },
  {
    id: '3',
    name: 'Indústrias Manufatureiras',
    description: 'Indústrias de manufatura com foco em automação',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-03-01'),
    status: 'draft',
    matchedCompanies: 89,
    criteria: {
      sectors: ['Indústria', 'Manufatura', 'Produção'],
      locations: [
        { country: 'Brasil', state: 'SP' },
        { country: 'Brasil', state: 'MG' },
      ],
      companySize: { min: 'medium', max: 'enterprise' },
      revenue: { min: 5000000, max: 50000000, currency: 'BRL' },
      employees: { min: 50, max: 500 },
    },
  },
]

// ==================== EMPRESAS MOCKADAS ====================

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechStore Brasil',
    cnpj: '12.345.678/0001-90',
    sector: 'Comércio Eletrônico',
    cnae: '4751-2/01',
    location: { country: 'Brasil', state: 'SP', city: 'São Paulo' },
    website: 'https://techstore.com.br',
    phone: '(11) 98765-4321',
    email: 'contato@techstore.com.br',
    revenue: 5000000,
    employees: 45,
    description: 'E-commerce de produtos eletrônicos e tecnologia',
    enrichmentStatus: 'complete',
    score: 85,
    tags: ['e-commerce', 'tecnologia', 'eletrônicos'],
    socialMedia: {
      linkedin: 'https://linkedin.com/company/techstore',
      instagram: 'https://instagram.com/techstore',
    },
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-03-15'),
  },
  {
    id: '2',
    name: 'CloudSoft Soluções',
    cnpj: '98.765.432/0001-10',
    sector: 'Software',
    cnae: '6201-5/00',
    location: { country: 'Brasil', state: 'SP', city: 'Campinas' },
    website: 'https://cloudsoft.com.br',
    phone: '(19) 99876-5432',
    email: 'contato@cloudsoft.com.br',
    revenue: 3000000,
    employees: 28,
    description: 'Desenvolvimento de software e soluções em nuvem',
    enrichmentStatus: 'complete',
    score: 92,
    tags: ['saas', 'cloud', 'software'],
    socialMedia: {
      linkedin: 'https://linkedin.com/company/cloudsoft',
    },
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-03-14'),
  },
  {
    id: '3',
    name: 'Indústria ABC',
    cnpj: '11.222.333/0001-44',
    sector: 'Manufatura',
    cnae: '2511-0/00',
    location: { country: 'Brasil', state: 'MG', city: 'Belo Horizonte' },
    website: 'https://industriaabc.com.br',
    phone: '(31) 3333-4444',
    email: 'contato@industriaabc.com.br',
    revenue: 15000000,
    employees: 180,
    description: 'Fabricação de estruturas metálicas',
    enrichmentStatus: 'partial',
    score: 78,
    tags: ['indústria', 'metal', 'manufatura'],
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-03-10'),
  },
]

// ==================== LEADS MOCKADOS ====================

export const mockLeads: Lead[] = [
  {
    id: '1',
    companyId: '1',
    company: mockCompanies[0],
    contactPerson: {
      name: 'João Silva',
      email: 'joao.silva@techstore.com.br',
      phone: '(11) 98765-4321',
      linkedin: 'https://linkedin.com/in/joaosilva',
      position: 'Diretor Comercial',
      department: 'Vendas',
    },
    status: 'qualified',
    source: 'Prospecção Ativa',
    score: 85,
    tags: ['high-priority', 'e-commerce'],
    assignedTo: '1',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-15'),
  },
  {
    id: '2',
    companyId: '2',
    company: mockCompanies[1],
    contactPerson: {
      name: 'Maria Oliveira',
      email: 'maria@cloudsoft.com.br',
      linkedin: 'https://linkedin.com/in/mariaoliveira',
      position: 'CEO',
      department: 'Executivo',
    },
    status: 'proposal',
    source: 'Indicação',
    score: 92,
    tags: ['hot-lead', 'saas'],
    assignedTo: '2',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-03-14'),
  },
  {
    id: '3',
    companyId: '3',
    company: mockCompanies[2],
    status: 'new',
    source: 'Website',
    score: 78,
    tags: ['industry'],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
  },
]

// ==================== WORKFLOWS MOCKADOS ====================

export const mockWorkflows: Workflow[] = [
  {
    id: '1',
    name: 'Cadência E-commerce',
    description: 'Sequência de contatos para empresas de e-commerce',
    status: 'active',
    steps: [
      {
        id: 'step1',
        order: 1,
        type: 'send_email',
        channel: 'email',
        delay: 0,
        delayUnit: 'minutes',
        content: {
          subject: 'Olá {{nome}}, vamos potencializar suas vendas?',
          body: 'Olá {{nome}},\n\nNotei que a {{empresa}} está crescendo no segmento de e-commerce...',
        },
      },
      {
        id: 'step2',
        order: 2,
        type: 'wait',
        channel: 'other',
        delay: 2,
        delayUnit: 'days',
        content: { body: '' },
      },
      {
        id: 'step3',
        order: 3,
        type: 'send_whatsapp',
        channel: 'whatsapp',
        delay: 0,
        delayUnit: 'minutes',
        content: {
          body: 'Oi {{nome}}! Tudo bem? Enviei um e-mail sobre como podemos ajudar a {{empresa}}...',
        },
      },
    ],
    triggers: [{ type: 'manual' }],
    leads: ['1', '3'],
    performance: {
      totalLeads: 2,
      completed: 0,
      inProgress: 2,
      bounced: 0,
      opened: 1,
      clicked: 1,
      replied: 0,
      conversions: 0,
      conversionRate: 0,
    },
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-15'),
    createdBy: '1',
  },
]

// ==================== ESTATÍSTICAS DO DASHBOARD ====================

export const mockDashboardStats: DashboardStats = {
  marketPotential: 12500000,
  roi: 342,
  conversionRate: 23.5,
  activeCampaigns: 8,
  totalLeads: 1247,
  qualifiedLeads: 342,
  totalRevenue: 2850000,
  trends: {
    marketPotential: 15.3,
    roi: 8.7,
    conversionRate: -2.1,
    activeCampaigns: 14.3,
  },
}

// ==================== RANKING DE OPORTUNIDADES ====================

export const mockOpportunityRanks: OpportunityRank[] = [
  {
    id: '1',
    companyName: 'CloudSoft Soluções',
    sector: 'Software',
    location: 'Campinas, SP',
    score: 92,
    potential: 'R$ 850K',
    status: 'proposal',
  },
  {
    id: '2',
    companyName: 'TechStore Brasil',
    sector: 'E-commerce',
    location: 'São Paulo, SP',
    score: 85,
    potential: 'R$ 620K',
    status: 'qualified',
  },
  {
    id: '3',
    companyName: 'Indústria ABC',
    sector: 'Manufatura',
    location: 'Belo Horizonte, MG',
    score: 78,
    potential: 'R$ 1.2M',
    status: 'new',
  },
  {
    id: '4',
    companyName: 'LogiTech Transportes',
    sector: 'Logística',
    location: 'Curitiba, PR',
    score: 75,
    potential: 'R$ 450K',
    status: 'contacted',
  },
  {
    id: '5',
    companyName: 'FoodHub Delivery',
    sector: 'Alimentação',
    location: 'Rio de Janeiro, RJ',
    score: 71,
    potential: 'R$ 380K',
    status: 'qualified',
  },
]

// ==================== FUNIL DE VENDAS ====================

export const mockFunnelStages: FunnelStage[] = [
  { name: 'Novos Leads', count: 1247, value: 12470000, percentage: 100 },
  { name: 'Qualificados', count: 542, value: 6785000, percentage: 43.5 },
  { name: 'Proposta', count: 186, value: 3348000, percentage: 14.9 },
  { name: 'Negociação', count: 94, value: 2115000, percentage: 7.5 },
  { name: 'Fechados', count: 42, value: 1260000, percentage: 3.4 },
]

// ==================== ATIVIDADES RECENTES ====================

export const mockRecentActivities: RecentActivity[] = [
  {
    id: '1',
    type: 'email_sent',
    description: 'E-mail enviado para João Silva (TechStore Brasil)',
    user: 'Matheus',
    timestamp: new Date(Date.now() - 300000),
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Matheus',
  },
  {
    id: '2',
    type: 'lead_created',
    description: 'Novo lead criado: CloudSoft Soluções',
    user: 'Ana Silva',
    timestamp: new Date(Date.now() - 900000),
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  },
  {
    id: '3',
    type: 'status_changed',
    description: 'Status alterado: TechStore Brasil → Qualificado',
    user: 'Matheus',
    timestamp: new Date(Date.now() - 1800000),
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Matheus',
  },
  {
    id: '4',
    type: 'email_opened',
    description: 'Maria Oliveira abriu o e-mail da campanha',
    user: 'Sistema',
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: '5',
    type: 'meeting_scheduled',
    description: 'Reunião agendada com CloudSoft para 18/03',
    user: 'Ana Silva',
    timestamp: new Date(Date.now() - 7200000),
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  },
]

// ==================== SUGESTÕES DE IA ====================

export const mockAISuggestions: AISuggestion[] = [
  {
    id: '1',
    type: 'email_subject',
    title: 'Assunto de E-mail',
    description: 'Aumentar taxa de abertura em 40%',
    content: '{{nome}}, transforme suas vendas com automação inteligente',
    confidence: 87,
  },
  {
    id: '2',
    type: 'timing',
    title: 'Melhor Horário',
    description: 'Baseado em dados históricos',
    content: 'Terça-feira, 10:00 - 11:00',
    confidence: 92,
  },
  {
    id: '3',
    type: 'channel',
    title: 'Canal Recomendado',
    description: 'Para este perfil de cliente',
    content: 'LinkedIn InMail + E-mail',
    confidence: 85,
  },
  {
    id: '4',
    type: 'approach',
    title: 'Abordagem Sugerida',
    description: 'Personalizada para o setor',
    content: 'Foco em ROI e cases de sucesso no e-commerce',
    confidence: 90,
  },
]

// ==================== NOTIFICAÇÕES ====================

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'lead',
    title: 'Novo lead qualificado',
    message: 'TechStore Brasil foi qualificado e está pronto para contato',
    read: false,
    actionUrl: '/dashboard/list-builder?lead=1',
    createdAt: new Date(Date.now() - 600000),
  },
  {
    id: '2',
    type: 'workflow',
    title: 'Cadência concluída',
    message: 'A cadência "E-commerce" foi concluída para 5 leads',
    read: false,
    actionUrl: '/dashboard/workflows/1',
    createdAt: new Date(Date.now() - 1800000),
  },
  {
    id: '3',
    type: 'success',
    title: 'Meta atingida!',
    message: 'Você atingiu 100% da meta mensal de conversões',
    read: true,
    createdAt: new Date(Date.now() - 86400000),
  },
]

// ==================== SETORES CNAE ====================

export const mockSectors = [
  'Comércio Eletrônico',
  'Software e SaaS',
  'Tecnologia',
  'Indústria',
  'Manufatura',
  'Serviços Financeiros',
  'Consultoria',
  'Educação',
  'Saúde',
  'Logística',
  'Varejo',
  'Alimentação',
  'Construção',
  'Agronegócio',
  'Marketing',
  'Energia',
]

// ==================== LOCALIZAÇÕES ====================

export const mockLocations = {
  states: ['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'PE', 'CE', 'GO', 'DF'],
  cities: {
    SP: ['São Paulo', 'Campinas', 'Santos', 'São José dos Campos', 'Ribeirão Preto'],
    RJ: ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes'],
    MG: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'],
  },
}

// ==================== TEMPLATES DE E-MAIL ====================

export const mockEmailTemplates = [
  {
    id: '1',
    name: 'Apresentação Inicial',
    subject: 'Olá {{nome}}, vamos conversar sobre {{assunto}}?',
    body: `Olá {{nome}},

Meu nome é {{meu_nome}} e sou {{meu_cargo}} na {{minha_empresa}}.

Notei que a {{empresa}} atua no segmento de {{setor}} e acredito que podemos ajudar a potencializar seus resultados.

Temos ajudado empresas como {{case_sucesso}} a alcançar {{resultado}}.

Que tal agendarmos uma conversa rápida de 15 minutos?

Abraços,
{{meu_nome}}`,
  },
  {
    id: '2',
    name: 'Follow-up',
    subject: 'Re: {{assunto_anterior}}',
    body: `Oi {{nome}},

Enviei um e-mail há alguns dias sobre {{assunto}}.

Conseguiu dar uma olhada?

Fico à disposição para qualquer dúvida.

Abraços,
{{meu_nome}}`,
  },
]
