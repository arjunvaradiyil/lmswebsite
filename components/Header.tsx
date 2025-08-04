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
              EduMatrix
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
            <i 
              className='bx bx-menu text-xl text-gray-600 hover:text-primary-600 cursor-pointer transition-colors duration-300' 
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
          <div className="fixed top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200" onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col py-4">
              <Link href="/" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-300" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="#about" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-300" onClick={toggleMenu}>
                About
              </Link>
              <Link href="#features" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-300" onClick={toggleMenu}>
                Features
              </Link>
              <Link href="#testimonials" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-300" onClick={toggleMenu}>
                Testimonials
              </Link>
              <Link href="#register" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-300" onClick={toggleMenu}>
                Register
              </Link>
              <Link href="#faq" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-300" onClick={toggleMenu}>
                FAQ
              </Link>
              <Link href="#contact-form" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-300" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 