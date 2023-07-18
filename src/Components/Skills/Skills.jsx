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
      <h1 id="Skills">Skills</h1>
      <div
        className="skill"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="skill-area">
          {images.map((image) => (
            <div className="skill-card">
              <img src={image.src} alt="ok" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
