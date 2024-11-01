// import MainTitle from "../../mainTitle/MainTitle";
import MyButton from "../mainButton/MyButton";
import Title from "../title/Title";

import "./stiles.scss";

const description = `We believe in a comprehensive approach to investment management, combining in-depth
research, meticulous analysis, and innovative strategies to generate sustainable returns.
Our team closely monitors market trends and economic indicators to identify promising
opportunities while mitigating risks.`;

const HomeCart = ({ title, btnTitle, onClick }) => {
  return (
    <div className="home-cart-container">
      <div>
        <Title text={title} type="underline-left" />
      </div>
      <section className="description">{description}</section>
      <MyButton title={btnTitle} onClick={onClick} />
    </div>
  );
};

export default HomeCart;
