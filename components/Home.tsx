'use client'

import { useEffect } from 'react'
import { useGSAP } from '@/hooks/useGSAP'

export default function Home(): JSX.Element {
  const { elementRef: heroRef, scrollTriggerAnimation, fadeInUp, slideInRight } = useGSAP<HTMLDivElement>()
  const { elementRef: textRef, fadeInUp: textFadeIn } = useGSAP<HTMLDivElement>()
  const { elementRef: imageRef, scaleIn } = useGSAP<HTMLDivElement>()

  useEffect(() => {
    // Hero section animation
    scrollTriggerAnimation(
      () => fadeInUp({ duration: 1.2, delay: 0.2 }),
      { trigger: heroRef.current, start: 'top 90%' }
    )

    // Text content animation
    scrollTriggerAnimation(
      () => textFadeIn({ duration: 1, delay: 0.5, stagger: 0.2 }),
      { trigger: textRef.current, start: 'top 80%' }
    )

    // Image animation
    scrollTriggerAnimation(
      () => scaleIn({ duration: 1.5, delay: 0.8, ease: 'back.out(1.7)' }),
      { trigger: imageRef.current, start: 'top 80%' }
    )
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl" ref={textRef}>
            <h6 className="text-primary-600 font-semibold mb-2">Welcome to LearnX</h6>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
              LEARNX
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              World's Finest for Individual Tuition - Comprehensive education from Kindergarten to Post-Graduation across all subjects and syllabi.
            </p>
            <div className="latter">
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input 
                  type="submit" 
                  value="Let's Start" 
                  className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
                />
              </form>
            </div>
          </div>
          <div className="hidden lg:block" ref={imageRef}>
            <img src="/home.png" alt="LearnX Home" className="max-w-md" />
          </div>
        </div>
      </div>
      <div ref={heroRef} className="absolute inset-0"></div>
    </section>
  )
} 