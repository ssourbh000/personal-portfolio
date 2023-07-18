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
    
    <div className="tools">
      <div className="tools-area">
        {images.map((image) => (
          <div className="tools-card">
            <img src={image.src} alt="ok" />
          </div>
        )
          )}
      </div>
    </div>
  

  )
}

export default Skills