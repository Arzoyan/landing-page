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
      <div>
        <img src="/images/Map.png" />
      </div>
    </div>
  );
};

export default WhereWeInvest;
