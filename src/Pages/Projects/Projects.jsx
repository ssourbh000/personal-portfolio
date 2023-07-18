import "./Projects.scss";
import Cards from "../../Components/Cards/Cards";

const Projects = () => {
  const slides = [
    { url: "http://localhost:5173/image1.jpg", link: "https://food-recipe-app-theta.vercel.app/"},
    { url: "http://localhost:5173/image2.jpg", link: "https://condescending-stonebraker-21d408.netlify.app/"},
    { url: "http://localhost:5173/image3.jpg", link: "https://laughing-banach-1bb40b.netlify.app/"},
    { url: "http://localhost:5173/image4.jpg", link: "https://1-expanding-cards-two.vercel.app/"},
    { url: "http://localhost:5173/image5.png", link: "https://condescending-stonebraker-21d408.netlify.app/"},
    { url: "http://localhost:5173/image6.png", link: "https://maspes.io/"},
    
  ];

  return (
    <div className="project" id="Projects" data-aos="fade-right">
      <Cards slides={slides} />
    </div>
  );
};

export default Projects;
