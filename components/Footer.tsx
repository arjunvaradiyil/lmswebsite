export default function Footer(): JSX.Element {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-primary-50 text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
              EduMatrix
            </h3>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Facebook</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Instagram</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Twitter</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">LinkedIn</a></li>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <li className="mb-2"><a href="#home" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Home</a></li>
            <li className="mb-2"><a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">About Us</a></li>
            <li className="mb-2"><a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Features</a></li>
            <li className="mb-2"><a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Testimonials</a></li>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <li className="mb-2"><a href="#register" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">KG to 12th Grade</a></li>
            <li className="mb-2"><a href="#register" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Higher Education</a></li>
            <li className="mb-2"><a href="#register" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Competitive Exams</a></li>
            <li className="mb-2"><a href="#register" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Special Programs</a></li>
            <li className="mb-2"><a href="#register" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Online Classes</a></li>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Tech Park, Bangalore,<br />Karnataka, India</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">info@edumatrix.com</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">+91 98765 43210</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">+91 87654 32109</a></li>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500">© 2025 EduMatrix <strong>DEVELOPED BY</strong> <strong>Arjun Varadiyil</strong>. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
} 