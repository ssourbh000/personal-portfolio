import "./Skills.scss";

const Skills = () => {
  const images = [
    { src: "HTML.png" },
    { src: "CSS.png" },
    { src: "java-script.png" },
    { src: "bootstrap.png" },
    { src: "SASS.png" },
    { src: "Rect.png" },
  ];

  return (
    <>
      <section id="skills">
        <div className="container mt-5">
          <div className="row text-center" id="skillHeading">
            <h1>Skills</h1>
          </div>
          <div className="row" id="skillsIcon">
            {images.map((image, i) => (
              <div className="col col-lg-2 col-sm-6" key={i + 1}>
                <div className="skillCard d-flex justify-content-center mb-5 mb-lg-0">
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

export default Skills;
