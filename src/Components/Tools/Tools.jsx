import "./Tools.scss";

const Tools = () => {
  const images = [
    { src: "github.png" },
    { src: "vscode.png" },
    { src: "slack.png" },
    { src: "react-router.svg" },
    { src: "postman.png" },
  ];

  return (
    <>
      <section id="tools">
        <div className="container">
          <div className="row text-center" id="toolsHeading"> 
            <h1>Tools</h1>
          </div>
          <div className="row" id="toolsIcon">
            
                {images.map((image,i) => (
                  <div className="col col-lg-2 col-sm-6" key={i + 1}>
                  <div className="toolCard d-flex justify-content-center mb-5 mb-lg-0">
                    <img src={image.src} alt="ok" style={{ width: "100px" }} />
                  </div>
                  </div>
                ))}
              
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Tools;
