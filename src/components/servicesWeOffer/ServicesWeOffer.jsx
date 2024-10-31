import { useState } from "react";
import MainTitle from "../../mainTitle/MainTitle";
import MainCollapse from "../mianCollapse/MainCollapse";

import "./stiles.scss";

const imgArray = [
  "/images/img-1.png",
  "/images/img-2.png",
  "/images/img-3.png",
  "/images/img-4.png",
  "/images/img-5.png",
  "/images/img-6.png",
  "/images/img-7.png",
];

const ServicesWeOffer = ({ dataCount }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="services-we-offer-container">
      <MainTitle title={"Services We Offer"} className={"title"} />
      <div className="data-section">
        <div className="img">
          <img src={imgArray[activeItem]} />
        </div>

        <MainCollapse
          dataCount={dataCount}
          OnClick={(e) => {
            setActiveItem(e[0]);
          }}
        />
      </div>
    </div>
  );
};

export default ServicesWeOffer;
