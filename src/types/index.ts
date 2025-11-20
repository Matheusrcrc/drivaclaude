// ==================== TIPOS DE USUÁRIO ====================

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: UserRole
  company?: string
  createdAt: Date
  lastLogin?: Date
}

export type UserRole = 'admin' | 'manager' | 'user'

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

// ==================== TIPOS DE ICP (IDEAL CUSTOMER PROFILE) ====================

export interface ICPProfile {
  id: string
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
  criteria: ICPCriteria
  status: 'active' | 'draft' | 'archived'
  matchedCompanies?: number
}

export interface ICPCriteria {
  sectors: string[] // CNAE ou setores
  locations: Location[]
  companySize: CompanySize
  revenue: RevenueRange
  employees: EmployeeRange
  technologies?: string[]
  customFilters?: CustomFilter[]
}

export interface Location {
  country?: string
  state?: string
  city?: string
  region?: string
}

export interface CompanySize {
  min?: 'micro' | 'small' | 'medium' | 'large' | 'enterprise'
  max?: 'micro' | 'small' | 'medium' | 'large' | 'enterprise'
}

export interface RevenueRange {
  min?: number
  max?: number
  currency: 'BRL' | 'USD' | 'EUR'
}

export interface EmployeeRange {
  min?: number
  max?: number
}

export interface CustomFilter {
  field: string
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'between'
  value: string | number | boolean
}

// ==================== TIPOS DE EMPRESA/LEAD ====================

export interface Company {
  id: string
  name: string
  cnpj?: string
  sector: string
  cnae?: string
  location: Location
  website?: string
  phone?: string
  email?: string
  revenue?: number
  employees?: number
  description?: string
  logo?: string
  socialMedia?: SocialMedia
  enrichmentStatus: EnrichmentStatus
  score?: number
  tags?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface SocialMedia {
  linkedin?: string
  facebook?: string
  instagram?: string
  twitter?: string
}

export type EnrichmentStatus = 'pending' | 'partial' | 'complete' | 'failed'

export interface Lead {
  id: string
  companyId: string
  company: Company
  contactPerson?: ContactPerson
  status: LeadStatus
  source: string
  score: number
  notes?: Note[]
  activities?: Activity[]
  tags?: string[]
  assignedTo?: string
  createdAt: Date
  updatedAt: Date
}

export interface ContactPerson {
  name: string
  email?: string
  phone?: string
  whatsapp?: string
  linkedin?: string
  position?: string
  department?: string
}

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'proposal'
  | 'negotiation'
  | 'won'
  | 'lost'
  | 'nurturing'

export interface Note {
  id: string
  content: string
  author: string
  createdAt: Date
}

export interface Activity {
  id: string
  type: ActivityType
  description: string
  date: Date
  user: string
  metadata?: Record<string, any>
}

export type ActivityType =
  | 'email_sent'
  | 'email_opened'
  | 'email_clicked'
  | 'whatsapp_sent'
  | 'linkedin_message'
  | 'call_made'
  | 'meeting_scheduled'
  | 'note_added'
  | 'status_changed'

// ==================== TIPOS DE WORKFLOW/CADÊNCIA ====================

export interface Workflow {
  id: string
  name: string
  description?: string
  status: 'active' | 'paused' | 'draft'
  steps: WorkflowStep[]
  triggers: WorkflowTrigger[]
  leads: string[] // IDs dos leads
  performance: WorkflowPerformance
  createdAt: Date
  updatedAt: Date
  createdBy: string
}

export interface WorkflowStep {
  id: string
  order: number
  type: WorkflowStepType
  channel: CommunicationChannel
  delay: number // minutos
  delayUnit: 'minutes' | 'hours' | 'days'
  content: StepContent
  conditions?: StepCondition[]
}

export type WorkflowStepType =
  | 'send_email'
  | 'send_whatsapp'
  | 'send_linkedin'
  | 'make_call'
  | 'wait'
  | 'conditional'
  | 'assign_task'

export type CommunicationChannel = 'email' | 'whatsapp' | 'linkedin' | 'phone' | 'other'

export interface StepContent {
  subject?: string
  body: string
  template?: string
  variables?: Record<string, string>
  attachments?: string[]
}

export interface StepCondition {
  field: string
  operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than'
  value: string | number | boolean
  action: 'skip' | 'end' | 'goto_step'
  targetStepId?: string
}

export interface WorkflowTrigger {
  type: 'manual' | 'scheduled' | 'event'
  event?: string
  schedule?: string // cron expression
}

export interface WorkflowPerformance {
  totalLeads: number
  completed: number
  inProgress: number
  bounced: number
  opened: number
  clicked: number
  replied: number
  conversions: number
  conversionRate: number
}

// ==================== TIPOS DE ANALYTICS ====================

export interface DashboardStats {
  marketPotential: number
  roi: number
  conversionRate: number
  activeCampaigns: number
  totalLeads: number
  qualifiedLeads: number
  totalRevenue: number
  trends: {
    marketPotential: number
    roi: number
    conversionRate: number
    activeCampaigns: number
  }
}

export interface OpportunityRank {
  id: string
  companyName: string
  sector: string
  location: string
  score: number
  potential: string
  status: LeadStatus
}

export interface FunnelStage {
  name: string
  count: number
  value: number
  percentage: number
}

export interface RecentActivity {
  id: string
  type: ActivityType
  description: string
  user: string
  timestamp: Date
  avatar?: string
}

// ==================== TIPOS DE MAPA/HEATMAP ====================

export interface MapData {
  regions: MapRegion[]
  companies: MapCompany[]
  filters: MapFilters
}

export interface MapRegion {
  id: string
  name: string
  coordinates: Coordinates
  density: number // 0-100
  companies: number
  potentialValue: number
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface MapCompany {
  id: string
  name: string
  location: Coordinates
  sector: string
  size: string
  revenue?: number
  score: number
}

export interface MapFilters {
  sectors: string[]
  locations: string[]
  sizeRange: CompanySize
  revenueRange: RevenueRange
  employeeRange: EmployeeRange
}

// ==================== TIPOS DE DADOS/IMPORTAÇÃO ====================

export interface DataImport {
  id: string
  fileName: string
  fileType: 'csv' | 'xlsx' | 'json'
  status: 'uploading' | 'processing' | 'mapping' | 'importing' | 'completed' | 'failed'
  totalRows: number
  processedRows: number
  successRows: number
  errorRows: number
  errors?: ImportError[]
  mapping?: FieldMapping
  createdAt: Date
  completedAt?: Date
}

export interface ImportError {
  row: number
  field: string
  message: string
}

export interface FieldMapping {
  [sourceField: string]: string // mapeia campo do arquivo para campo do sistema
}

export interface DataExport {
  id: string
  name: string
  format: 'csv' | 'xlsx' | 'json'
  filters?: any
  fields: string[]
  totalRecords: number
  status: 'pending' | 'processing' | 'completed' | 'failed'
  downloadUrl?: string
  createdAt: Date
  expiresAt?: Date
}

// ==================== TIPOS DE ADMIN/PERMISSÕES ====================

export interface Permission {
  id: string
  name: string
  description: string
  category: PermissionCategory
}

export type PermissionCategory =
  | 'leads'
  | 'workflows'
  | 'data'
  | 'analytics'
  | 'admin'
  | 'settings'

export interface RolePermissions {
  role: UserRole
  permissions: string[] // IDs de permissões
}

export interface Team {
  id: string
  name: string
  members: TeamMember[]
  createdAt: Date
}

export interface TeamMember {
  userId: string
  user: User
  role: UserRole
  joinedAt: Date
}

// ==================== TIPOS DE NOTIFICAÇÃO ====================

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  read: boolean
  actionUrl?: string
  createdAt: Date
}

export type NotificationType =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'workflow'
  | 'lead'
  | 'system'

// ==================== TIPOS DE CONFIGURAÇÃO ====================

export interface AppSettings {
  general: GeneralSettings
  email: EmailSettings
  whatsapp: WhatsAppSettings
  linkedin: LinkedInSettings
  enrichment: EnrichmentSettings
}

export interface GeneralSettings {
  companyName: string
  timezone: string
  dateFormat: string
  currency: 'BRL' | 'USD' | 'EUR'
  language: 'pt-BR' | 'en-US' | 'es-ES'
}

export interface EmailSettings {
  provider: string
  apiKey?: string
  fromEmail: string
  fromName: string
  replyTo?: string
  trackOpens: boolean
  trackClicks: boolean
}

export interface WhatsAppSettings {
  provider: string
  apiKey?: string
  phoneNumber?: string
  enabled: boolean
}

export interface LinkedInSettings {
  enabled: boolean
  apiKey?: string
}

export interface EnrichmentSettings {
  provider: string
  apiKey?: string
  autoEnrich: boolean
  enrichFields: string[]
}

// ==================== TIPOS DE AI/COPILOT ====================

export interface AISuggestion {
  id: string
  type: SuggestionType
  title: string
  description: string
  content?: string
  confidence: number // 0-100
  metadata?: Record<string, any>
}

export type SuggestionType =
  | 'email_subject'
  | 'email_body'
  | 'message_script'
  | 'timing'
  | 'channel'
  | 'followup'
  | 'approach'

// ==================== TIPOS UTILITÁRIOS ====================

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

export interface ChartDataset {
  label: string
  data: number[]
  backgroundColor?: string | string[]
  borderColor?: string | string[]
  borderWidth?: number
}
