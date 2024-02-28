import React, { useState, useEffect } from "react";
import "../Components/Styles/Slider.css";

const defaultImages = [
  "https://via.placeholder.com/1200x360?text=Image+1",
  "https://via.placeholder.com/1200x360?text=Image+2",
  "https://via.placeholder.com/1200x360?text=Image+3",
  "https://via.placeholder.com/1200x360?text=Image+4",
  "https://via.placeholder.com/1200x360?text=Image+5",
];

function Slider(props) {
  const [translateX, setTranslateX] = useState(1530);

  const slideLeft = (e) => {
    e.target.classList.toggle("active");
    const slideCount = document.getElementsByClassName("slide").length;
    if (translateX < 1530) {
      setTranslateX(translateX + 1220);
    } else {
      setTranslateX(1530 - 1220 * (slideCount - 1));
    }
  };

  const slideRight = () => {
    const slideCount = document.getElementsByClassName("slide").length;
    if (1530 - 1220 * (slideCount - 1) < translateX) {
      setTranslateX(translateX - 1220);
    } else {
      setTranslateX(1530);
    }
  };

  useEffect(() => {
    const target = document.getElementsByClassName("slidewrap")[0];
    target.style.transform = `translateX(${translateX}px)`;
  }, [translateX]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const slideCount = document.getElementsByClassName("slide").length;
      if (1530 - 1220 * (slideCount - 1) < translateX) {
        setTranslateX(translateX - 1220);
      } else {
        setTranslateX(1530);
      }
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [translateX]);

  return (
    <div className="wrap">
      <button className="Btn prev" onClick={slideLeft}>
        <svg viewBox="0 0 64 64" className="icon">
          <path
            className="path"
            d="M41.4141 54.4143C40.633 55.1953 39.3667 55.1953 38.5857 54.4143L17.5856 33.4142C16.8046 32.6332 16.8046 31.3668 17.5856 30.5858L38.5857 9.58573C39.3667 8.80468 40.633 8.80468 41.4141 9.58573C42.1951 10.3668 42.1951 11.6331 41.4141 12.4142L21.8283 32L41.4141 51.5858C42.1951 52.3669 42.1951 53.6332 41.4141 54.4143Z"
          ></path>
        </svg>
      </button>
      <button className="Btn next" onClick={slideRight}>
        <svg viewBox="0 0 64 64" className="icon">
          <path
            className="path"
            d="M41.4141 54.4143C40.633 55.1953 39.3667 55.1953 38.5857 54.4143L17.5856 33.4142C16.8046 32.6332 16.8046 31.3668 17.5856 30.5858L38.5857 9.58573C39.3667 8.80468 40.633 8.80468 41.4141 9.58573C42.1951 10.3668 42.1951 11.6331 41.4141 12.4142L21.8283 32L41.4141 51.5858C42.1951 52.3669 42.1951 53.6332 41.4141 54.4143Z"
          ></path>
        </svg>
      </button>
      <div className="slidewrap">
        {defaultImages.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
