'use client'

import { useEffect } from 'react'
import { useGSAP } from '@/hooks/useGSAP'

export default function Register(): JSX.Element {
  const { elementRef: registerRef, scrollTriggerAnimation, fadeInUp } = useGSAP<HTMLElement>()
  const { elementRef: headerRef, fadeInUp: headerFadeIn } = useGSAP<HTMLDivElement>()
  const { elementRef: formRef, fadeInUp: formFadeIn } = useGSAP<HTMLFormElement>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Handle form submission
    console.log('Registration form submitted')
  }

  useEffect(() => {
    // Register section animation
    scrollTriggerAnimation(
      () => fadeInUp({ duration: 1.2, delay: 0.2 }),
      { trigger: registerRef.current, start: 'top 85%' }
    )

    // Header animation
    scrollTriggerAnimation(
      () => headerFadeIn({ duration: 1, delay: 0.5 }),
      { trigger: headerRef.current, start: 'top 80%' }
    )

    // Form animation
    scrollTriggerAnimation(
      () => formFadeIn({ duration: 1, delay: 0.8, stagger: 0.1 }),
      { trigger: formRef.current, start: 'top 80%' }
    )
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary-50 to-primary-50" id="register" ref={registerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>
          <h5 className="text-primary-600 font-semibold mb-2">Join LearnX Today</h5>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Start Your Learning Journey</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="space-y-2">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="space-y-2">
              <select 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <select 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
              >
                <option value="">Select Class</option>
                <option value="kg">KG</option>
                <option value="1-5">Class 1-5</option>
                <option value="6-8">Class 6-8</option>
                <option value="9-10">Class 9-10</option>
                <option value="11-12">Class 11-12</option>
                <option value="college">College</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <select 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
              >
                <option value="">Select Subject</option>
                <option value="all">All Subjects</option>
                <option value="maths">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="social">Social Studies</option>
                <option value="computer">Computer Science</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <textarea 
                placeholder="Additional Requirements (Optional)" 
                rows={4} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 