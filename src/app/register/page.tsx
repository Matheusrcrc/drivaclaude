'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Mail, Lock, Eye, EyeOff, User, Building } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
    terms: false,
  })
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    company?: string
    password?: string
    confirmPassword?: string
    terms?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Validação
    const newErrors: any = {}
    if (!formData.name) newErrors.name = 'Nome é obrigatório'
    if (!formData.email) newErrors.email = 'E-mail é obrigatório'
    if (!formData.company) newErrors.company = 'Empresa é obrigatória'
    if (!formData.password) newErrors.password = 'Senha é obrigatória'
    if (formData.password.length < 6)
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres'
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'As senhas não coincidem'
    if (!formData.terms) newErrors.terms = 'Você deve aceitar os termos de uso'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simular registro
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600 items-center justify-center p-12 relative overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full mix-blend-overlay filter blur-xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/20 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000" />

        <div className="relative z-10 text-white text-center max-w-lg">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Comece Grátis Hoje
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a centenas de empresas que já transformaram sua prospecção.
          </p>
          <div className="space-y-4 text-left">
            {[
              {
                title: 'Teste Grátis por 14 Dias',
                description: 'Todos os recursos premium incluídos',
              },
              {
                title: 'Sem Cartão de Crédito',
                description: 'Comece agora sem compromisso',
              },
              {
                title: 'Suporte Completo',
                description: 'Nossa equipe está pronta para ajudar',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
            <span className="font-heading font-bold text-3xl gradient-text">Driva</span>
          </Link>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              Crie sua conta
            </h1>
            <p className="text-gray-600">
              Comece grátis, sem cartão de crédito
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Nome completo"
              type="text"
              placeholder="Seu nome"
              leftIcon={<User className="w-5 h-5" />}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
            />

            <Input
              label="E-mail corporativo"
              type="email"
              placeholder="seu@empresa.com"
              leftIcon={<Mail className="w-5 h-5" />}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
            />

            <Input
              label="Empresa"
              type="text"
              placeholder="Nome da empresa"
              leftIcon={<Building className="w-5 h-5" />}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              error={errors.company}
            />

            <Input
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              placeholder="Mínimo 6 caracteres"
              leftIcon={<Lock className="w-5 h-5" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
            />

            <Input
              label="Confirmar senha"
              type="password"
              placeholder="Digite a senha novamente"
              leftIcon={<Lock className="w-5 h-5" />}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={errors.confirmPassword}
            />

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-0.5"
                />
                <span className="text-sm text-gray-700">
                  Eu aceito os{' '}
                  <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                    Termos de Uso
                  </Link>{' '}
                  e a{' '}
                  <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                    Política de Privacidade
                  </Link>
                </span>
              </label>
              {errors.terms && <p className="mt-1 text-sm text-red-600">{errors.terms}</p>}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
            >
              Criar Conta Grátis
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 border-t border-gray-300" />
            <span className="text-sm text-gray-500">ou</span>
            <div className="flex-1 border-t border-gray-300" />
          </div>

          {/* Social signup */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-medium text-gray-700">Continuar com Google</span>
          </button>

          {/* Sign in link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
