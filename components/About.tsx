'use client'

import { useEffect } from 'react'
import { useGSAP } from '@/hooks/useGSAP'

export default function About(): JSX.Element {
  const { elementRef: aboutRef, scrollTriggerAnimation, fadeInUp } = useGSAP<HTMLDivElement>()
  const { elementRef: imageRef, slideInLeft } = useGSAP<HTMLDivElement>()
  const { elementRef: contentRef, fadeInUp: contentFadeIn } = useGSAP<HTMLDivElement>()

  useEffect(() => {
    // About section animation
    scrollTriggerAnimation(
      () => fadeInUp({ duration: 1.2, delay: 0.2 }),
      { trigger: aboutRef.current, start: 'top 85%' }
    )

    // Image animation
    scrollTriggerAnimation(
      () => slideInLeft({ duration: 1.5, delay: 0.5, ease: 'power2.out' }),
      { trigger: imageRef.current, start: 'top 80%' }
    )

    // Content animation
    scrollTriggerAnimation(
      () => contentFadeIn({ duration: 1, delay: 0.8, stagger: 0.2 }),
      { trigger: contentRef.current, start: 'top 80%' }
    )
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="about" ref={aboutRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="mb-8 lg:mb-0" ref={imageRef}>
            <img src="/about.png" alt="About LearnX" className="w-full max-w-lg mx-auto rounded-xl shadow-lg" />
          </div>
          <div ref={contentRef}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
              About LearnX
            </h2>
            <p className="text-gray-600 mb-4">
              LearnX is a premier educational institution dedicated to providing world-class individual tuition services. We specialize in comprehensive education from Kindergarten to Post-Graduation, covering all subjects and syllabi including CBSE, ICSE, IGCSE, IB, and State Board curricula.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Mission</h4>
            <p className="text-gray-600 mb-4">
              To provide personalized, high-quality education that empowers students to achieve their academic goals and unlock their full potential through expert guidance and innovative teaching methodologies.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Vision</h4>
            <p className="text-gray-600 mb-4">
              To become the most trusted name in individual tuition, recognized for excellence in education delivery, student success, and innovative learning solutions that transform lives.
            </p>
            
            <h5 className="text-xl font-semibold text-primary-600 mt-6 mb-3">Why Choose LearnX?</h5>
            <ul className="space-y-2">
              <li className="text-gray-600">• Expert, verified tutors with proven track records</li>
              <li className="text-gray-600">• Flexible learning options - home tuition & online classes</li>
              <li className="text-gray-600">• Personalized attention with one-to-one and group options</li>
              <li className="text-gray-600">• Monthly assessments and detailed progress reports</li>
              <li className="text-gray-600">• Multilingual instruction in 8+ languages</li>
              <li className="text-gray-600">• Comprehensive coverage from KG to PG</li>
              <li className="text-gray-600">• Specialized programs for competitive exams</li>
              <li className="text-gray-600">• Parent support through dedicated WhatsApp groups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 