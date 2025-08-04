export default function Home(): JSX.Element {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h6>Welcome to LearnX</h6>
        <h1>LEARNX</h1>
        <p>World's Finest for Individual Tuition - Comprehensive education from Kindergarten to Post-Graduation across all subjects and syllabi.</p>
        <div className="latter">
          <form>
            <input type="email" placeholder="Enter your email address" required />
            <input type="submit" value="Let's Start" />
          </form>
        </div>
      </div>
      <div className="home-img">
        <img src="/home.png" alt="LearnX Home" />
      </div>
    </section>
  )
} 