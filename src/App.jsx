import './App.scss'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import github from '../public/github.png';
import facebook from '../public/facebook.png';
import twitter from '../public/twitter.png';
import instagram from '../public/instagram.png';
import whatsapp from '../public/whatsapp.png';
import leetcode from '../public/leetcode.png';
import Projects from './Pages/Projects/Projects';
import Social_icons from './Pages/Social/Social_icons';
import SkillToolToggle from './Pages/Skills/SkillToolToggle';
import Skills from './Components/Skills/Skills';
// import Tools from './Components/Tools/Tools';

function App() {
  
  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="home">
          <Home />
        </div>
        <div className="page" id="about">
          <About />
        </div>
        <div className="toggle" id="toggle">
          <SkillToolToggle />
        </div>
        <div className="skill" id="skill">
          <Skills  />
        </div>
        {/* <div className="tool" id="tool">
          <Tools  />
        </div> */}
        
        <div className="project" id="project">
          <Projects />
        </div>
        <div className="social-media">
          <h2 className='social-text'>Let's Connect</h2>

          <div className="social-links" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <Social_icons logo={facebook} title='facebook' />
            <Social_icons logo={twitter} title='twitter' />
            <Social_icons logo={instagram} title='instagram' />
            <Social_icons logo={github} title='github' />
            <Social_icons logo={leetcode} title='leetcode' />
          </div>
        </div>
        
        

      </main>
    </div>
  )
}

export default App;
