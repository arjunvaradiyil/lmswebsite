'use client'

import Link from 'next/link'

interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header>
      <Link href="/" className="logo">
        <span>LearnX</span>
      </Link>
      
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#features">Features</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="#register">Register</Link>
        <Link href="#faq">FAQ</Link>
        <Link href="#contact-form">Contact</Link>
      </nav>

      <div className="header-icons">
        <i className='bx bx-search'></i>
        <i className='bx bx-user'></i>
        <i className='bx bx-menu' id="menu-icon" onClick={toggleMenu}></i>
      </div>
    </header>
  )
} 