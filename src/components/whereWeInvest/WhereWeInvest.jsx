import "./styles.scss";

const WhereWeInvest = () => {
  return (
    <div className="WhereWeInvest-container">
      <div className="title-container">
        <h2 className="title">Where We Invest</h2>
      </div>
      <div className="description-container">
        <section className="description">
          We invest in North and South Americas, Europe, Asia, Africa, and GCC
          Markets.
        </section>
      </div>
      <div
        style={{
          backgroundImage: `url(./images/Map.png)`,
          overflow: "auto",
          width: "100%",
          height: "50vw",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
      </div>
    </div>
  );
};

export default WhereWeInvest;
