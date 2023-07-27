import './App.scss'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import github from '../public/github.png';
import facebook from '../public/facebook.png';
import twitter from '../public/twitter.png';
import instagram from '../public/instagram.png';
// import whatsapp from '../public/whatsapp.png';
import leetcode from '../public/leetcode.png';
import Projects from './Pages/Projects/Projects';
import Social_icons from './Pages/Social/Social_icons';
import Skills from './Components/Skills/Skills';
import Tools from './Components/Tools/Tools';

function App() {
  
  return (


    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Social_icons />
    
    
      {/* <section  id="home">
      <div className="container">
        <div className="row">

          <div className="col-lg-2">
            
          </div>

          <div className="col-lg-10">
            
          </div>

        </div>
      </div>
    </section> */}



        
        {/* <Home /> */}
        {/* </div> */}
        {/* <div className="about" id="about">
          <About />
        </div> */}
        {/* <div className="skills" id='skills'>
          <Skills />
        </div> */}
        {/* <div className="tool" id='tools'>
          <Tools />
        </div> */}
        
        
        {/* <div className="project" id="project">
          <Projects />
        </div> */}

        
        {/* <div className="social-media" id='Contact'>
          <h1 className='social-text'>Let's Connect</h1>

          <div className="social-links" >
            <Social_icons logo={facebook} title='facebook' url={'https://www.facebook.com/sourabh.sarkar.92'} />
            <Social_icons logo={twitter} title='twitter' url={'https://www.instagram.com/_sourabh_000/'} />
            <Social_icons logo={instagram} title='instagram' url={'https://www.instagram.com/_sourabh_000/'} />
            <Social_icons logo={github} title='github' url={'https://github.com/ssourbh000'} />
            <Social_icons logo={leetcode} title='leetcode' url={'https://leetcode.com/_sourabh_111/'} />
          </div>
        </div> */}
        
        

        </>
    
  )
}

export default App;
