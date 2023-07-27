import "./Home.scss";

const Home = () => {
  return (
    <section id="home">
      <div className="container  mt-5 d-flex justify-content-center ">
        <div className="row mt-5" id="glass">
          <div className="col-lg-6 col-sm-10 text-center mt-4" >
            
              <img src="myPic1.jpg" alt="img" width="80%" style={{borderRadius: "50%"}} id="myImg" />
            
          </div>

          <div className="col-lg-6 ">
            <div className="details" >
              <span className="intro">Hello I'm</span>

              <div>
                <h3 className="txt">SOURABH SARKAR</h3>
              </div>

              <div className="stack">
                Front-End <b>Web Developer</b>
              </div>
              <div
                className="aboutWork"
                style={{ lineHeight: "1.2em", marginTop: "1em" }}
              >
                <p>
                  A passionate and dedicated front-end React developer with a
                  strong eye for development and a knack for creating
                  intuitive user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className='home' id='Home'>
    //     <div className="details" >
    //         <span className='intro'>Hello I'm</span>
    //         <div className='name'>
    //             <div>
    //                 <h3 className='txt'>SOURABH SARKAR</h3>
    //             </div>
    //         </div>
    //         <div className='stack'>
    //             Front-End <b>Web Developer</b>
    //         </div>
    //         <div className="aboutWork" style={{lineHeight: '1.2em', marginTop: '1em'}}>
    //             <p>A passionate and dedicated front-end React developer with
    //                 a strong eye <br /> for development and a knack for creating intuitive user experiences.</p>
    //         </div>
    //     </div>
    //     <div className="profile-img" data-aos="fade-up"
    //  data-aos-anchor-placement="bottom-bottom">
    //         <img src="myPic1.jpg" alt="img" width="500px" />
    //     </div>
    // </div>
  );
};

export default Home;
