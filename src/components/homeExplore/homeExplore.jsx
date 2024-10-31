import "./stiles.scss";

const HomeExplore = () => {
  return (
    <div className="homeExplore-container">
      <div className="data-section">
        <div className="title-container">
          <h2 className="title">Explore</h2>
          <div className="underline" />
        </div>
        <section className="section-title">Our Core Values</section>
        <section className="section-title">Corporation Operating Model</section>
        <section className="section-title">
          Advantages of Working With Us
        </section>
      </div>
      <div className="img-section">
        <img src="/images/Photo.png" />
      </div>
    </div>
  );
};

export default HomeExplore;
