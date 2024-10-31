import "./styles.scss";
const TitleCenterLine = ({ title, className }) => {
  return (
    <div className={className ? className : ""}>
      <div className="TitleCenterLine">
        <h2 className="title">{title}</h2>
        <div className="underline" />
      </div>
    </div>
  );
};

export default TitleCenterLine;
