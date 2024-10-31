import TitleCenterLine from "../titleCenterLine/TitleCenterLine";
import "./styles.scss";

const CardItemUnderline = ({ title, description, regards = true }) => {
  return (
    <div className="CardItemUnderline-container">
      {title && <TitleCenterLine title={title} />}
      <div className="description-container">
        {description.map((item, index) => {
          return (
            <section key={index} className="description">
              {item} <br /> <br />
            </section>
          );
        })}
        {regards && (
          <div>
            <section className="description"> Warm regards </section>
            <section className="description">Board of Directors </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItemUnderline;
