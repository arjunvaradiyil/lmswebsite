export default function Testimonials() {
  const testimonials = [
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

  return (
    <section className="testimonials" id="testimonials">
      <div className="center-text">
        <h5>What Our Students & Parents Say</h5>
        <h2>Success Stories</h2>
      </div>
      <div className="testimonials-marquee">
        <div className="marquee-content">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <h6>{testimonial.grade}</h6>
                <p>{testimonial.feedback}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless marquee */}
          {testimonials.map((testimonial, index) => (
            <div key={`duplicate-${index}`} className="testimonial-item">
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <h6>{testimonial.grade}</h6>
                <p>{testimonial.feedback}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className='bx bxs-star'></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 