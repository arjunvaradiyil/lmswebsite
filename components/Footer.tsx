export default function Footer(): JSX.Element {
  return (
    <section className="contact">
      <div className="main-contact">
        <div className="contact-content">
          <h3 style={{fontSize: '2rem', fontWeight: '800', color: 'var(--main-color)', marginBottom: '20px'}}>LearnX</h3>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </div>
        
        <div className="contact-content">
          <h4>Quick Links</h4>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </div>
        
        <div className="contact-content">
          <h4>Our Programs</h4>
          <li><a href="#register">KG to 12th Grade</a></li>
          <li><a href="#register">Higher Education</a></li>
          <li><a href="#register">Competitive Exams</a></li>
          <li><a href="#register">Special Programs</a></li>
          <li><a href="#register">Online Classes</a></li>
        </div>
        
        <div className="contact-content">
          <h4>Contact Info</h4>
          <li><a href="#">Tech Park, Bangalore,<br />Karnataka, India</a></li>
          <li><a href="#">info@learnx.com</a></li>
          <li><a href="#">+91 98765 43210</a></li>
          <li><a href="#">+91 87654 32109</a></li>
        </div>
      </div>
      <div className="last-text">
        <p>© 2024 LearnX. All rights reserved.</p>
      </div>
    </section>
  )
} 