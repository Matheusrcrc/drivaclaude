# Driva - Plataforma de Inteligência Comercial B2B

![Driva Logo](https://img.shields.io/badge/Driva-Intelig%C3%AAncia%20Comercial-blue)

Plataforma completa de inteligência comercial para mapeamento de mercado, geração de leads e automação de prospecção multicanal.

## 🚀 Funcionalidades

### ✅ Implementadas

- **Landing Page Premium** - Página inicial moderna com gradientes animados e CTAs
- **Autenticação** - Sistema de login e registro com validação
- **Dashboard Principal** - Visão geral com KPIs e métricas
- **Gestão de ICP** - Criação e gerenciamento de perfis de cliente ideal
- **Mapa de Mercado** - Visualização de oportunidades por região (pronto para integração com Mapbox/Leaflet)
- **Construtor de Listas** - Gerenciamento e enriquecimento de leads
- **Fluxos de Prospecção** - Cadências automatizadas multicanal com IA Copilot
- **Gestão de Dados** - Importação/exportação de dados
- **Painel Admin** - Gerenciamento de usuários e permissões
- **Analytics** - Métricas e relatórios de desempenho

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna e responsiva
- **Lucide React** - Ícones modernos
- **Google Fonts** - Inter e Poppins

## 📦 Instalação

```bash
# Clonar o repositório
git clone <repository-url>
cd drivaclaude

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Cores Principais

- **Primary**: Azul (#0ea5e9)
- **Secondary**: Roxo/Magenta (#d946ef)
- **Success**: Verde (#22c55e)
- **Error**: Vermelho (#ef4444)
- **Warning**: Âmbar (#f59e0b)

### Componentes UI

- **Button** - Variantes: primary, secondary, outline, ghost, danger
- **Card** - Com efeitos de hover e glassmorphism
- **Input** - Com validação e ícones
- **Modal** - Dialogs responsivos e acessíveis

## 📱 Páginas

### Públicas

- `/` - Landing page
- `/login` - Login
- `/register` - Registro

### Dashboard (Protegidas)

- `/dashboard` - Dashboard principal
- `/dashboard/icp` - Gestão de ICP
- `/dashboard/market-map` - Mapa de mercado
- `/dashboard/list-builder` - Construtor de listas
- `/dashboard/workflows` - Fluxos de prospecção
- `/dashboard/data` - Gestão de dados
- `/dashboard/admin` - Administração
- `/dashboard/analytics` - Analytics

## 🔧 Estrutura do Projeto

```
src/
├── app/                    # Páginas Next.js (App Router)
│   ├── dashboard/         # Páginas do dashboard
│   ├── login/            # Página de login
│   ├── register/         # Página de registro
│   └── page.tsx          # Landing page
├── components/            # Componentes React
│   ├── ui/               # Componentes UI base
│   ├── layout/           # Componentes de layout
│   └── dashboard/        # Componentes específicos do dashboard
├── lib/                  # Utilitários e helpers
│   ├── utils.ts         # Funções utilitárias
│   └── mockData.ts      # Dados mockados para demo
└── types/               # Definições TypeScript
    └── index.ts         # Tipos da aplicação
```

## 🎯 Próximos Passos (Produção)

Para colocar em produção, você precisará integrar:

### Backend e Autenticação
- [ ] NextAuth.js ou Clerk para autenticação
- [ ] Banco de dados (PostgreSQL, MongoDB ou Supabase)
- [ ] API Routes para CRUD de dados

### Integrações Externas
- [ ] API de enriquecimento de dados (Clearbit, Hunter.io)
- [ ] Serviço de e-mail (SendGrid, AWS SES)
- [ ] WhatsApp API (Twilio ou similar)
- [ ] LinkedIn API
- [ ] OpenAI API para IA Copilot

### Visualizações
- [ ] Mapbox ou Leaflet para mapas interativos
- [ ] Chart.js ou Recharts para gráficos
- [ ] D3.js para visualizações avançadas

### Deploy
- [ ] Vercel (recomendado para Next.js)
- [ ] Variáveis de ambiente (.env)
- [ ] Analytics (Google Analytics, Mixpanel)

## 📊 Dados Mockados

A aplicação atualmente usa dados mockados para demonstração. Todos os dados estão em `src/lib/mockData.ts` e incluem:

- Usuários
- Perfis ICP
- Empresas e Leads
- Workflows e Cadências
- Estatísticas do Dashboard
- Sugestões de IA

## 🎨 Customização

### Cores

Edite as cores em `tailwind.config.ts` e `src/app/globals.css`

### Componentes

Todos os componentes são customizáveis via props e classes Tailwind

### Layouts

O layout do dashboard pode ser ajustado em `src/components/layout/DashboardLayout.tsx`

## 🤝 Contribuindo

Este é um projeto MVP. Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto foi desenvolvido por **Matheus** como MVP da plataforma Driva.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato.

---

**Desenvolvido com ❤️ usando Next.js e Tailwind CSS**