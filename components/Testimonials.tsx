'use client'

import { useEffect } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import { Testimonial } from '@/types'

export default function Testimonials(): JSX.Element {
  const { elementRef: testimonialsRef, scrollTriggerAnimation, fadeInUp } = useGSAP<HTMLElement>()
  const { elementRef: headerRef, fadeInUp: headerFadeIn } = useGSAP<HTMLDivElement>()
  const { elementRef: marqueeRef, timeline } = useGSAP<HTMLDivElement>()

  const testimonials: Testimonial[] = [
    {
      name: "Devika Dana",
      grade: "10th CBSE School Topper",
      avatar: "/con1.svg",
      feedback: "LearnX helped me achieve my dream of becoming a school topper. The personalized attention and expert guidance made all the difference.",
      rating: 5
    },
    {
      name: "Aparna",
      grade: "12th Grade Science - 100%",
      avatar: "/con2.svg",
      feedback: "The teachers at LearnX are exceptional. They helped me score 100% in my 12th grade science subjects.",
      rating: 5
    },
    {
      name: "Rifan K",
      grade: "1st Grade Chemistry - 100%",
      avatar: "/con3.svg",
      feedback: "My daughter improved from average to scoring 100% in chemistry. The teaching methods are truly effective.",
      rating: 5
    },
    {
      name: "Hredhan Abdullah Bin",
      grade: "4th Grade Math Olympiad Gold Medal",
      avatar: "/con4.svg",
      feedback: "LearnX's Vedic Maths program helped my son win the Math Olympiad gold medal. Amazing results!",
      rating: 5
    },
    {
      name: "Nyjil Abdullah Masood Rayya",
      grade: "2nd Grade Olympiad Gold Medal, 9th Grade - 94%",
      avatar: "/con1.svg",
      feedback: "From Olympiad gold medals to 94% in 9th grade, LearnX has been instrumental in my academic success.",
      rating: 5
    },
    {
      name: "Lena Vimal",
      grade: "10th ICSE - 94%, Maths - 100%",
      avatar: "/con2.svg",
      feedback: "The ICSE preparation at LearnX is outstanding. I scored 94% overall and 100% in mathematics.",
      rating: 5
    },
    {
      name: "Ajzal Akshay Mathew",
      grade: "6th Grade SAT USA",
      avatar: "/con3.svg",
      feedback: "LearnX prepared me excellently for the SAT exam. The international curriculum support is top-notch.",
      rating: 5
    }
  ]

  useEffect(() => {
    // Testimonials section animation
    scrollTriggerAnimation(
      () => fadeInUp({ duration: 1.2, delay: 0.2 }),
      { trigger: testimonialsRef.current, start: 'top 85%' }
    )

    // Header animation
    scrollTriggerAnimation(
      () => headerFadeIn({ duration: 1, delay: 0.5 }),
      { trigger: headerRef.current, start: 'top 80%' }
    )

    // Enhanced marquee animation
    if (marqueeRef.current) {
      const tl = timeline()
      tl.fromTo(
        marqueeRef.current,
        { x: 0 },
        { 
          x: '-50%', 
          duration: 25, 
          ease: 'none',
          repeat: -1
        }
      )
    }
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="testimonials" ref={testimonialsRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>
          <h5 className="text-primary-600 font-semibold mb-2">What Our Students & Parents Say</h5>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex" ref={marqueeRef}>
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 min-w-[300px] mx-4">
                <div className="mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                  <h6 className="text-sm text-primary-600 mb-3">{testimonial.grade}</h6>
                  <p className="text-gray-600 mb-3">{testimonial.feedback}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i: number) => (
                      <i key={i} className='bx bxs-star text-yellow-400'></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless marquee */}
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={`duplicate-${index}`} className="bg-white rounded-xl shadow-md p-6 min-w-[300px] mx-4">
                <div className="mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                  <h6 className="text-sm text-primary-600 mb-3">{testimonial.grade}</h6>
                  <p className="text-gray-600 mb-3">{testimonial.feedback}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i: number) => (
                      <i key={i} className='bx bxs-star text-yellow-400'></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 