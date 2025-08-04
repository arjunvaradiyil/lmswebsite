'use client'

import { useState, useEffect } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { FAQItem } from '@/types'

export default function FAQ(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { elementRef: faqRef, scrollTriggerAnimation, fadeInUp } = useGSAP<HTMLElement>()
  const { elementRef: headerRef, fadeInUp: headerFadeIn } = useGSAP<HTMLDivElement>()
  const { elementRef: itemsRef, fadeInUp: itemsFadeIn } = useGSAP<HTMLDivElement>()

  const faqData: FAQItem[] = [
    {
      question: "What subjects do you offer for tuition?",
      answer: "We offer comprehensive tuition for all subjects from Kindergarten to Post-Graduation. This includes CBSE, ICSE, IGCSE, IB, State Board syllabi, and specialized courses for NEET, JEE, CUET, and other competitive exams."
    },
    {
      question: "Do you provide both online and offline classes?",
      answer: "Yes, we offer both home tuition and online classes. You can choose the mode that best suits your schedule and preferences. Our online platform provides the same quality of education with interactive sessions."
    },
    {
      question: "How do you select and verify your tutors?",
      answer: "All our tutors are handpicked through a rigorous selection process. We verify their qualifications, teaching experience, and conduct background checks. Only tutors with proven track records are selected."
    },
    {
      question: "What is the fee structure for different classes?",
      answer: "Our fee structure varies based on the class level, subjects, and mode of learning (online/offline). We offer competitive rates and flexible payment options. Contact us for detailed pricing information."
    },
    {
      question: "Do you provide study materials and assessments?",
      answer: "Yes, we provide comprehensive study materials, practice tests, and monthly assessments. Parents receive regular progress reports and feedback on their child's performance."
    },
    {
      question: "Can I choose between individual and group classes?",
      answer: "Absolutely! We offer both one-to-one individual classes and small group sessions. You can choose based on your learning preferences and budget requirements."
    },
    {
      question: "What languages do you teach in?",
      answer: "We offer classes in multiple languages including English, Hindi, Arabic, Malayalam, Tamil, Kannada, Marathi, Odiya, and more. You can choose your preferred language of instruction."
    },
    {
      question: "How do I get started with EduMatrix?",
      answer: "Getting started is easy! Simply fill out our registration form, select your preferred subjects and class level, and our team will contact you within 24 hours to schedule a consultation and begin your learning journey."
    }
  ]

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  useEffect(() => {
    // FAQ section animation
    scrollTriggerAnimation(
      () => fadeInUp({ duration: 1.2, delay: 0.2 }),
      { trigger: faqRef.current, start: 'top 85%' }
    )

    // Header animation
    scrollTriggerAnimation(
      () => headerFadeIn({ duration: 1, delay: 0.5 }),
      { trigger: headerRef.current, start: 'top 80%' }
    )

    // FAQ items animation
    scrollTriggerAnimation(
      () => itemsFadeIn({ duration: 1, delay: 0.8, stagger: 0.1 }),
      { trigger: itemsRef.current, start: 'top 80%' }
    )
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="faq" ref={faqRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>
          <h5 className="text-primary-600 font-semibold mb-2">Frequently Asked Questions</h5>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Questions About EduMatrix</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4" ref={itemsRef}>
          {faqData.map((faq: FAQItem, index: number) => (
            <div key={index} className={`border border-gray-200 rounded-lg overflow-hidden ${activeIndex === index ? 'active' : ''}`}>
              <div 
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
                <i className={`bx bx-plus text-2xl text-primary-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}></i>
              </div>
              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 