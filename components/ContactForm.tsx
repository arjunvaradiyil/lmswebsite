'use client'

export default function ContactForm(): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted')
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50" id="contact-form">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h5 className="text-primary-600 font-semibold mb-2">Get In Touch</h5>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Ready to start your learning journey? Reach out to us through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className='bx bx-map text-xl text-primary-600'></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600">Tech Park, Bangalore,<br />Karnataka, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className='bx bx-phone text-xl text-primary-600'></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">+91 98765 43210<br />+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className='bx bx-envelope text-xl text-primary-600'></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Address</h4>
                  <p className="text-gray-600">info@learnx.com<br />support@learnx.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className='bx bx-time text-xl text-primary-600'></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Monday - Saturday<br />8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <select 
                  id="subject" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="admission">Admission Query</option>
                  <option value="fees">Fee Structure</option>
                  <option value="schedule">Class Schedule</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us about your requirements..." 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <i className='bx bx-send'></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 