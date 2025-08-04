'use client'

export default function Register() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Registration form submitted')
  }

  return (
    <section className="register" id="register">
      <div className="center-text">
        <h5>Join LearnX Today</h5>
        <h2>Start Your Learning Journey</h2>
      </div>
      <div className="register-content">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Class</option>
              <option value="kg">KG</option>
              <option value="1-5">Class 1-5</option>
              <option value="6-8">Class 6-8</option>
              <option value="9-10">Class 9-10</option>
              <option value="11-12">Class 11-12</option>
              <option value="college">College</option>
            </select>
          </div>
          <div className="form-group">
            <select required>
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
          <div className="form-group">
            <textarea placeholder="Additional Requirements (Optional)" rows={4}></textarea>
          </div>
          <button type="submit" className="btn">Register Now</button>
        </form>
      </div>
    </section>
  )
} 