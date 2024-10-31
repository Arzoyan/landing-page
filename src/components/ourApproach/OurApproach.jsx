import HomeCart from "../homeCartItem/HomeCart";
import MainCarousel from "../mainCarousel/MainCarousel";

import "./styles.scss";

const OurApproach = () => {
  return (
    <div className="OurApproach-container">
      <HomeCart
        title={" Our Approach"}
        btnTitle={"Learn More About UII"}
        onClick={() => {
          console.log(
            "%csrccomponentshomePageHomePage.jsx:1 mi ban",
            "color: #007acc;",
          );
        }}
      />
      <MainCarousel />
    </div>
  );
};

export default OurApproach;
