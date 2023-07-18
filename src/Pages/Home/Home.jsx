import './Home.scss'

const Home = () => {
  return (
    <div className='home' id='Home'>
        <div className="details" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <span className='intro'>Hello I'm</span>
            <div className='name'>
                <div>
                    <h3 className='txt'>SOURABH SARKAR</h3>
                </div>
            </div>
            <div className='stack'>
                Front-End <b>Web Developer</b>
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