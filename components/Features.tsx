export default function Features(): JSX.Element {
  return (
    <section className="features" id="features">
      <div className="center-text">
        <h5>Why Choose LearnX?</h5>
        <h2>Our Features</h2>
        <p>Discover what makes LearnX the preferred choice for quality education and personalized learning experiences.</p>
      </div>
      <div className="features-content">
        <div className="feature-card">
          <div className="feature-icon">
            <i className='bx bx-graduation'></i>
          </div>
          <div className="feature-text">
            <h3>KG to PG Coverage</h3>
            <p>Comprehensive education from Kindergarten to Post-Graduation across all subjects and syllabi.</p>
            <div className="feature-badge">
              <span>Complete</span>
            </div>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <i className='bx bx-user-check'></i>
          </div>
          <div className="feature-text">
            <h3>Expert, Verified Tutors</h3>
            <p>Handpicked tutors with strong subject knowledge and extensive teaching experience.</p>
            <div className="feature-badge">
              <span>Verified</span>
            </div>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <i className='bx bx-home-alt'></i>
          </div>
          <div className="feature-text">
            <h3>Home & Online Classes</h3>
            <p>Flexible learning options - at your home or through live online sessions.</p>
            <div className="feature-badge">
              <span>Flexible</span>
            </div>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <i className='bx bx-group'></i>
          </div>
          <div className="feature-text">
            <h3>One-to-One / Group Options</h3>
            <p>Customized classes for individuals or small groups based on your preference.</p>
            <div className="feature-badge">
              <span>Customized</span>
            </div>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <i className='bx bx-chart'></i>
          </div>
          <div className="feature-text">
            <h3>Monthly Assessments</h3>
            <p>Regular tests and progress reports to track improvements and performance.</p>
            <div className="feature-badge">
              <span>Tracked</span>
            </div>
          </div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <i className='bx bx-globe'></i>
          </div>
          <div className="feature-text">
            <h3>Multilingual Classes</h3>
            <p>Learn in your preferred language - English, Hindi, Arabic, Malayalam, Tamil, and more.</p>
            <div className="feature-badge">
              <span>8+ Languages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 