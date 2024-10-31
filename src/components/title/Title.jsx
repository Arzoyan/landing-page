import React from "react";
import "./styles.scss";

const Title = ({ text, type }) => {
  return (
    <div className={`title-container ${type}`}>
      <h1 className="title-text">{text}</h1>
      {type === "underline-left" && <div className="underline left"></div>}
      {type === "underline-center" && <div className="underline center"></div>}
    </div>
  );
};

export default Title;
