import RightSectionItem from "./RightSectionItem";
import logo from "/Logo.svg";

import "./styles.scss";
import Image from "../image/Image";

const MainFooter = () => {
  return (
    <div className="footer-container">
      <div className="logo-section">
        <Image src={logo} width={"100%"} height={"100%"} />
      </div>
      <div className="right-section">
        <RightSectionItem
          title={"Quick Links"}
          data={["About Us", "History", "Projects"]}
        />
        <RightSectionItem
          title={"Social"}
          data={["Linkedin", "Facebook", "Instagram", "X (Twitter)"]}
        />
        <RightSectionItem
          title={"Get in Touch"}
          data={["Contact Us", "Where We Invest"]}
        />
      </div>
    </div>
  );
};

export default MainFooter;
