'use client'

import { useEffect } from 'react'
import { useGSAP } from '@/hooks/useGSAP'

export default function Features(): JSX.Element {
  const { elementRef: featuresRef, scrollTriggerAnimation, fadeInUp } = useGSAP<HTMLElement>()
  const { elementRef: headerRef, fadeInUp: headerFadeIn } = useGSAP<HTMLDivElement>()
  const { elementRef: cardsRef, fadeInUp: cardsFadeIn } = useGSAP<HTMLDivElement>()

  useEffect(() => {
    // Features section animation
    scrollTriggerAnimation(
      () => fadeInUp({ duration: 1.2, delay: 0.2 }),
      { trigger: featuresRef.current, start: 'top 85%' }
    )

    // Header animation
    scrollTriggerAnimation(
      () => headerFadeIn({ duration: 1, delay: 0.5 }),
      { trigger: headerRef.current, start: 'top 80%' }
    )

    // Cards animation
    scrollTriggerAnimation(
      () => cardsFadeIn({ duration: 1, delay: 0.8, stagger: 0.15 }),
      { trigger: cardsRef.current, start: 'top 80%' }
    )
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50" id="features" ref={featuresRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>
          <h5 className="text-primary-600 font-semibold mb-2">Why Choose LearnX?</h5>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes LearnX the preferred choice for quality education and personalized learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsRef}>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <i className='bx bx-graduation text-3xl text-primary-600'></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">KG to PG Coverage</h3>
              <p className="text-gray-600 mb-4">Comprehensive education from Kindergarten to Post-Graduation across all subjects and syllabi.</p>
              <div className="inline-block">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">Complete</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <i className='bx bx-user-check text-3xl text-primary-600'></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert, Verified Tutors</h3>
              <p className="text-gray-600 mb-4">Handpicked tutors with strong subject knowledge and extensive teaching experience.</p>
              <div className="inline-block">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">Verified</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <i className='bx bx-home-alt text-3xl text-primary-600'></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Home & Online Classes</h3>
              <p className="text-gray-600 mb-4">Flexible learning options - at your home or through live online sessions.</p>
              <div className="inline-block">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">Flexible</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <i className='bx bx-group text-3xl text-primary-600'></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">One-to-One / Group Options</h3>
              <p className="text-gray-600 mb-4">Customized classes for individuals or small groups based on your preference.</p>
              <div className="inline-block">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">Customized</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <i className='bx bx-chart text-3xl text-primary-600'></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Monthly Assessments</h3>
              <p className="text-gray-600 mb-4">Regular tests and progress reports to track improvements and performance.</p>
              <div className="inline-block">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">Tracked</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <i className='bx bx-globe text-3xl text-primary-600'></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Multilingual Classes</h3>
              <p className="text-gray-600 mb-4">Learn in your preferred language - English, Hindi, Arabic, Malayalam, Tamil, and more.</p>
              <div className="inline-block">
                <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">8+ Languages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 