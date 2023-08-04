import './Social_icons.scss'

const Social_icons = () => {

  const iconDetails = [
    {id: 1, src: "facebook.png", url: "https://www.facebook.com/sourabh.sarkar.92", title: 'facebook'},
    {id: 2, src: "instagram.png", url:"https://www.instagram.com/_sourabh_000/", title: 'instagram'},
    {id: 3, src: "twitter.png", url:'https://www.instagram.com/_sourabh_000/', title: 'twitter'},
    {id: 4, src :"leetcode.png", url :'https://leetcode.com/_sourabh_111/', title: 'leetcode'},
    { id:5, src:"github.png", url:"https://github.com/ssourbh000", title: 'github'},
  ]

  // const handleClick = () => {
  //   window.open(iconDetails.url , '_blank'); // Opens the link in a new tab/window
  // }

  return (
    <>
        <section id="socials">
        <div className="container">
          <div className="row text-center" id="socialHeading"> 
            <h1>Let's Connect</h1>
          </div>
          <div className="row" id="socialIcon" >
            
                {iconDetails.map((iconDetail, id) => (
                  <div className="col-lg-2" key={id}  id='socialCard' >
                    <a href={iconDetail.url} id='socialAnchor'>
                      <img src={iconDetail.src} alt="ok" style={{ width: "50px" }} />
                      <h4>{iconDetail.title}</h4>

                    </a>
                    
                  
                  </div>
                ))}
              
          </div>
        </div>
      </section>


      {/* <div className='social-media-links' onClick={handleClick}>
        <a href='#'>
          <img src={logo} alt="logo" />
          
        </a> <h1>{title}</h1>
    </div> */}



    </>
  )
}

export default Social_icons