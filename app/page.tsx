'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Home from '@/components/Home'
import About from '@/components/About'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Register from '@/components/Register'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      const header = document.querySelector('header')
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <main>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Home />
      <About />
      <Features />
      <Testimonials />
      <Register />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
} 