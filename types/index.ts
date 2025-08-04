// Common interfaces used across components

export interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export interface Testimonial {
  name: string
  grade: string
  avatar: string
  feedback: string
  rating: number
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  role: string
  class: string
  subject: string
  message?: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
} 