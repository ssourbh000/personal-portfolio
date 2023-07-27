import "./Projects.scss";
import Cards from "../../Components/Cards/Cards";

const Projects = () => {
  const slides = [
    {
      url: "http://localhost:5173/image1.jpg",
      link: "https://food-recipe-app-theta.vercel.app/",
    },
    {
      url: "http://localhost:5173/image2.jpg",
      link: "https://condescending-stonebraker-21d408.netlify.app/",
    },
    {
      url: "http://localhost:5173/image3.jpg",
      link: "https://laughing-banach-1bb40b.netlify.app/",
    },
    {
      url: "http://localhost:5173/image4.jpg",
      link: "https://1-expanding-cards-two.vercel.app/",
    },
    {
      url: "http://localhost:5173/image5.png",
      link: "https://ssourbh000.github.io/Simple_calculator/",
    },
    { url: "http://localhost:5173/image6.png", link: "https://maspes.io/" },
  ];

  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="row" id="projectCenter">
          <h1 id="projectText">Projects</h1>
            <div className="projectArea col-lg-8 text-center">
              <Cards slides={slides} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
