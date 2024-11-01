import { useState } from "react";
import { DATA_ITEMS } from "./Advantages";

const AdvantagesMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = DATA_ITEMS.length - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DATA_ITEMS.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + DATA_ITEMS.length) % DATA_ITEMS.length,
    );
  };

  return (
    <div className=" AdvantagesMobile Advantages-container ">
      <div className="title-container">
        <h2 className="title">Advantages and Benefits of Working With Us</h2>
      </div>
      <div className="item-container">
        {DATA_ITEMS.map((item, index) => (
          <div
            key={item.title}
            className={`item ${index === currentIndex ? "active" : "hidden"}`}
          >
            <div className="item-title-container">
              <h2 className="item-title">{item.title}</h2>
            </div>
            <div className="item-description-container">
              <section className="item-description">{item.description}</section>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Icons with Active/Inactive SVGs */}
      <div className="navigation-icons">
        <img
          src={
            currentIndex === 0
              ? "/carousel-active.svg"
              : "/carousel-inactive.svg"
          }
          alt="First"
          onClick={handlePrevious}
          className="nav-icon"
        />
        <img
          src={
            currentIndex !== 0 && currentIndex !== lastIndex
              ? "/carousel-active.svg"
              : "/carousel-inactive.svg"
          }
          alt="Middle"
          onClick={() => {}}
          className="nav-icon"
        />
        <img
          src={
            currentIndex === lastIndex
              ? "/carousel-active.svg"
              : "/carousel-inactive.svg"
          }
          alt="Last"
          onClick={handleNext}
          className="nav-icon"
        />
      </div>
    </div>
  );
};

export default AdvantagesMobile;
