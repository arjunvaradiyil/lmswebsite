'use client'

import Link from 'next/link'
import { HeaderProps } from '@/types'

export default function Header({ isMenuOpen, toggleMenu }: HeaderProps): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="logo">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              LearnX
            </span>
          </Link>
          
          <nav className={`hidden lg:flex items-center gap-8 ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              About
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Testimonials
            </Link>
            <Link href="#register" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Register
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              FAQ
            </Link>
            <Link href="#contact-form" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <i className='bx bx-search text-xl text-gray-600 hover:text-primary-600 cursor-pointer transition-colors duration-300'></i>
            <i className='bx bx-user text-xl text-gray-600 hover:text-primary-600 cursor-pointer transition-colors duration-300'></i>
            <i 
              className='bx bx-menu text-xl text-gray-600 hover:text-primary-600 cursor-pointer transition-colors duration-300' 
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
      </div>
    </header>
  )
} 