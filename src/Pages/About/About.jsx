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
                <p style={{lineHeight: '1.5em', fontSize: '1.2em'}}> Welcome to my online portfolio! I'm <b>Sourabh Sarkar</b>, a committed <b>Front-End React Developer</b> with a keen sense of aesthetics 
                  and a talent for producing simple-to-use user interfaces. I enjoy creating useful online applications that satisfy client 
                  needs while also delighting users. I have developed my abilities in writing clear, semantic code that is effective and maintainable thanks to a strong foundation in<b> HTML, 
                  CSS, and JavaScript</b>. I have been a software support analyst for <b>Accenture</b> for three years.
                   </p>
            </div>
            <div className="education" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <h2>Education</h2>
                <p style={{lineHeight: '1.5em', fontSize: '1.2em'}}>I graduated from <b>Institute of Engineering and Technology DAVV, Indore</b> back in 2017 during my time at <b>IET DAVV</b>, I pursued a Bachelor's degree with a focus on Information and Technology. 
                2017 provided me with the opportunity to work with Accenture thanks to the campus placement program. I am an alumini of <b>Jawahar Navodaya Vidyalaya Mandsaur </b>
                as I had completed my High School back in 2012.
                </p>
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