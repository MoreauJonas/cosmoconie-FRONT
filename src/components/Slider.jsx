import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sliderData } from "./SliderData";

const Slider = () => {
  const [currentSlide, setCurrenteSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrenteSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  // const prevSlide = () => {
  //   setCurrenteSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  // }

  function autoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrenteSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [autoScroll, autoSlide, currentSlide, slideInterval]);

  return (
    <div className="slider">
      {/* <AiOutlineLeft className='arrow-slider prev' onClick={prevSlide} />
      <AiOutlineRight className='arrow-slider next' onClick={nextSlide} /> */}

      {sliderData.map((slide, index) => {
        return (
          <div
            className={
              index === currentSlide ? "slide-slider current" : "slide-slider"
            }
            key={index}
          >
            {index === currentSlide && (
              <div>
                <Link to={slide.link}>
                  <img
                    className="img-slider"
                    src={require(`../assets/images/${slide.image}`)}
                    alt={slide.heading}
                  />
                </Link>
                <div className="content-slider">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
