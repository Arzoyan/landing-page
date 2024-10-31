import "./styles.scss";
const MainTitle = ({ title, className }) => {
  return (
    <div className={className ? className : ""}>
      <div>
        <h2 className="title">{title}</h2>
        <div className="underline" />
      </div>
    </div>
  );
};

export default MainTitle;
