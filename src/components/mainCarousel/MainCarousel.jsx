// import "./styles.scss";

// const IMG_DATA = [
//   "/images/carousel-1.png",
//   "/images/carousel-2.png",
//   "/images/carousel-3.png",
// ];

// const activSVG = "/carousel-active.svg";
// const inactiveSVG = "/carousel-inactive.svg";
// const MainCarousel = () => {
//   return (
//     <dev>
//       <div>
//         <img />
//       </div>
//       <div>
//         <section>Year of Investment Excellence</section>
//       </div>
//       <div>{/* activ svg */}</div>
//     </dev>
//   );
// };

// export default MainCarousel;
import "./styles.scss";
import { useState } from "react";

const IMG_DATA = [
  "/images/carousel-1.png",
  "/images/carousel-2.png",
  "/images/carousel-3.png",
];
const TEXT_DATA = [
  "Year of Investment Excellence",
  "Markets’ Presence",
  "Assets Under Management",
];

const activeSVG = "/carousel-active.svg";
const inactiveSVG = "/carousel-inactive.svg";

const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <img src={IMG_DATA[activeIndex]} alt={`Slide ${activeIndex + 1}`} />
      </div>
      <div className="carousel-caption">
        <section>{TEXT_DATA[activeIndex]}</section>
      </div>
      <div className="carousel-navigation">
        {IMG_DATA.map((_, index) => (
          <img
            key={index}
            src={index === activeIndex ? activeSVG : inactiveSVG}
            alt={`Navigation ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;
