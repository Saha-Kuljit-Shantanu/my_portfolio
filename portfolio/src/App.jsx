import { useState,useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import HomeBanner from './components/home_banner.jsx'
import SkillBanner from './components/skill_banner.jsx'
import ProjectBanner from './components/project_banner.jsx'
import EduBanner from './components/edu_banner.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Col } from 'react-bootstrap'
import Footer from './components/footer.jsx'



function App() {
  const [bannerType, setBannerType] = useState('home')

  useEffect(() => {
    // Function to update the banner type based on the current hash
    const updateBanner = () => {
      const hash = window.location.hash || '#home';  // Default to home if no hash
      const type = hash.replace('#', ''); // Get the banner type from the hash
      setBannerType(type);
    };

    // Listen to hash change events
    window.addEventListener('hashchange', updateBanner);

    // Initialize banner on mount
    updateBanner();

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('hashchange', updateBanner);
  }, []);

  return (
    <div className='App'>
     
      <NavBar />
      <Container className='wrap'>
        <section className="banner">
          <Container classname="d-flex flex-column" style= {{minHeight: "100vh"}}>            
            {bannerType === 'home' && <HomeBanner />}
            {bannerType === 'skills' && <SkillBanner />}
            {bannerType === 'projects' && <ProjectBanner />}
            {bannerType === 'education' && <EduBanner />}
          </Container>
          <Footer />
        </section>
      </Container>
      

      
    </div>
  )
}

export default App

{/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}