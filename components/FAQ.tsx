'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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
      question: "How do I get started with LearnX?",
      answer: "Getting started is easy! Simply fill out our registration form, select your preferred subjects and class level, and our team will contact you within 24 hours to schedule a consultation and begin your learning journey."
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="center-text">
        <h5>Frequently Asked Questions</h5>
        <h2>Common Questions About LearnX</h2>
      </div>
      <div className="faq-content">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              <i className='bx bx-plus'></i>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 