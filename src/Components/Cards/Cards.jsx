import { useState } from "react";
// import '../Cards/Cards.scss'


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
    
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
    filter: "grayscale(90%)",
  
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "90%",
    transform: "translate(0, -50%)",
    left: "30px",
    fontSize: "45px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
    // color: "rgb(36, 35, 35)",
    
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "90%",
    transform: "translate(0, -50%)",
    right: "30px",
    fontSize: "45px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
  };

  // const dotsContainerStyles = {
  //   display: "flex",
  //   justifyContent: "center",
  // };

  // const dotStyle = {
  //   margin: "0 3px",
  //   cursor: "pointer",
  //   fontSize: "20px",
  // };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  const goToLink = () => {
    window.open(slides[currentIndex].link, "_blank");
  }
  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   ,
  // };

  return (
    <div id='overlay' style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStyles} onClick={goToLink}></div>


      {/* <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyle}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div> */}


    </div>
  );
};

export default ImageSlider;


