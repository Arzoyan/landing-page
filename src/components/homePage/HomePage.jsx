import HomeExplore from "../homeExplore/homeExplore";
import OurApproach from "../ourApproach/OurApproach";
import OurMission from "../ourMission/OurMission";
import ServicesWeOffer from "../servicesWeOffer/ServicesWeOffer";
import BannerItem from "./BannerItem";

import "./styles.scss";

const HomePage = () => {
  return (
    <div style={{ boxSizing: " border-box" }}>
      <div className="banner-container">
        <video className="background-video" autoPlay loop muted>
          <source src="/home-video-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <BannerItem />
      </div>
      <div>
        <OurApproach />
      </div>
      <div>
        <ServicesWeOffer />
      </div>
      <OurMission />
      <div>
        <HomeExplore />
      </div>
    </div>
  );
};

export default HomePage;
