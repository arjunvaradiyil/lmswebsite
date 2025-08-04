'use client'

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted')
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="center-text">
        <h5>Get In Touch</h5>
        <h2>Contact Us</h2>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-form-container">
        <div className="contact-info-side">
          <h3>Contact Information</h3>
          <p>Ready to start your learning journey? Reach out to us through any of these channels.</p>
          
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className='bx bx-map'></i>
              </div>
              <div className="contact-info-details">
                <h4>Our Location</h4>
                <p>Tech Park, Bangalore,<br />Karnataka, India</p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className='bx bx-phone'></i>
              </div>
              <div className="contact-info-details">
                <h4>Phone Numbers</h4>
                <p>+91 98765 43210<br />+91 87654 32109</p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className='bx bx-envelope'></i>
              </div>
              <div className="contact-info-details">
                <h4>Email Address</h4>
                <p>info@learnx.com<br />support@learnx.com</p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className='bx bx-time'></i>
              </div>
              <div className="contact-info-details">
                <h4>Working Hours</h4>
                <p>Monday - Saturday<br />8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-side">
          <h3>Send us a Message</h3>
          <form className="main-contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="admission">Admission Query</option>
                <option value="fees">Fee Structure</option>
                <option value="schedule">Class Schedule</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Tell us about your requirements..." required></textarea>
            </div>
            
            <button type="submit" className="contact-submit-btn">
              <i className='bx bx-send'></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 