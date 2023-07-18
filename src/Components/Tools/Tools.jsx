import './Tools.scss'

const Tools = () => {
  const images = [
    {src : 'github.png'},
    {src : 'vscode.png'},
    {src : 'slack.png'},
    {src :'react-router.svg'},
    {src :'postman.png'},
  ];
  
  return (
    <>
      <h1 id="Tools">Tools</h1>
      <div className="tools" data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
        <div className="tools-area">
          {images.map((image) => (
            <div className="tools-card">
              <img src={image.src} alt="ok" />
            </div>
          )
            )}
        </div>
      </div>
    </>
    
  

  )
}

export default Tools