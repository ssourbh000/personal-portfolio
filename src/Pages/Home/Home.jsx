import './Home.scss'

const Home = () => {
  return (
    <div className='home' id='Home'>
        <div className="details" data-aos="zoom-in">
            <span className='intro'>Hello I'm</span>
            <div className='name'>
                <div>
                    <h3 className='txt'>SOURABH SARKAR</h3>
                </div>
            </div>
            <div className='stack'>
                Front-End <b>Web Developer</b>
            </div>
            <div className="aboutWork" style={{lineHeight: '1.2em', marginTop: '1em'}}>
                <p>A passionate and dedicated front-end React developer with 
                    a strong eye <br /> for development and a knack for creating intuitive user experiences.</p>
            </div>
        </div>
        <div className="profile-img" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <img src="myPic1.jpg" alt="img" />
        </div>
    </div>
  )
}

export default Home