import MyButton from "../mainButton/MyButton";

const BannerItem = () => {
  return (
    <div className="BannerItem-container">
      <div className="title-container">
        <h4>Welcome to UAE International Investments</h4>
      </div>
      <div className="description-container">
        <section className="description">
          At UAE International Investments, we are committed to maximizing your
          financial potential through strategic investments and tailored
          financial solutions. With a team of seasoned professionals and a track
          record of success, we strive to deliver exceptional results for our
          clients.
        </section>
      </div>
      <div className="button-container">
        <MyButton title="Explore Our Investments" />
      </div>
    </div>
  );
};

export default BannerItem;
