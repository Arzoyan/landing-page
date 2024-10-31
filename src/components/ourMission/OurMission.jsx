import { useState } from "react";
import TitleCenterLine from "../titleCenterLine/TitleCenterLine";

import "./styles.scss";
import MyButton from "../mainButton/MyButton";
const DATA = {
  1: {
    title: "Our Mission",
    description: `   Our mission is to empower and build sustainable preserved wealth
          through strategic investment management and financial planning and
          data collection. We are committed to strategically navigating the path
          to financial success and growth with confidence and clarity.`,
    btnTitle: "Discover Our Investment Strategies",
  },
  2: {
    title: "Our Approach",
    description: `At UAE International Investments,
     we believe in a holistic approach to investments that focuses on long-term growth, 
    risk management, agility and governance and financial security through steady growth.
     Our team of experienced professionals combines rigorous analysis,
     strategic insight, and a deep understanding of market dynamics and long built relationships.`,
    btnTitle: "Discover Our Investment Strategies",
  },
};
const activeSVG = "/carousel-active.svg";
const inactiveSVG = "/carousel-inactive.svg";
const OurMission = () => {
  const [screen, setScreen] = useState(1);
  return (
    <div className="OurMission-container">
      <TitleCenterLine
        title={DATA[screen].title}
        className={"OurMission-title"}
      />
      <div className="description-container">
        <section className="section">{DATA[screen].description}</section>
        <MyButton title={DATA[screen].btnTitle} />
      </div>
      <div className="carousel-navigation">
        {[0, 1].map((_, index) => (
          <img
            key={index}
            src={index + 1 === screen ? activeSVG : inactiveSVG}
            alt={`Navigation ${index + 1}`}
            onClick={() => setScreen(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurMission;
