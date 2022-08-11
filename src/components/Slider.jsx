import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { sliderData } from './Slider-data'

const Slider = () => {
  const [currentSlide, setCurrenteSlide] = useState(0)
  const slideLength = sliderData.length

  const autoScroll = true
  let slideInterval
  let intervalTime = 7000

  const nextSlide = () => {
    setCurrenteSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrenteSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  function autoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrenteSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      autoSlide()
    }
    return () => clearInterval(slideInterval)
  }, [autoScroll, autoSlide, currentSlide, slideInterval])

  return (
    <div className='slider'>
      <AiOutlineLeft className='arrow-slider prev' onClick={prevSlide} />
      <AiOutlineRight className='arrow-slider next' onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div
            className={
              index === currentSlide ? 'slide-slider current' : 'slide-slider'
            }
            key={index}
          >
            {index === currentSlide && (
              <div>
                <a href='http://localhost:3000/region/4'>
                  <img className='img-slider' src={slide.image} alt='slide' />
                </a>
                {/* <div className='content-slider'>
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className='btn-slider'>En savoir plus</button>
                </div> */}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider
