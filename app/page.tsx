'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Container from '@/components/Container'
import Categories from '@/components/Categories'
import Features from '@/components/Features'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import Register from '@/components/Register'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
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