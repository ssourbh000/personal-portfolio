import './About.scss'

const About = () => {
  return (
    <div className='about' id="About">
        <div className="name" data-aos="zoom-in-right">
            <h1>About</h1> 
        </div>
        <div className="txt">
            <div className="about-me" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <h2>About Me</h2>
                <p>I am a Full Stack Web Developer with a passion for building websites
                     and applications. I have a background in web development and a 
                     passion for learning new technologies. I have a background in 
                     web development and a passion for learning new technologies. 
                     I have a background in web development and a passion for learning
                    new technologies. I have a background in web development and a 
                    passion for learning new technologies. I have a background in 
                    web development and a pass </p>
            </div>
            <div className="education" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <h2>Education</h2>
                <p>I am a Full Stack Web Developer with a passion for building websites
                     and applications. I have a background in web development and a 
                     passion for learning new technologies. I have a background in 
                     web development and a passion for learning new technologies. 
                     I have a background in web development and a passion for learning
                    new technologies. I have a background in web development and a 
                    passion for learning new technologies. I have a background in 
                    web development and a pass </p>
            </div>
            {/* <div className="skills" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <h2>Skills</h2>
                <p>I am a Full Stack Web Developer with a passion for building websites
                     and applications. I have a background in web development and a 
                     passion for learning new technologies. I have a background in 
                     web development and a passion for learning new technologies. 
                     I have a background in web development and a passion for learning
                    new technologies. I have a background in web development and a 
                    passion for learning new technologies. I have a background in 
                    web development and a pass </p>
            </div> */}
        </div>
    </div>
  )
}

export default About