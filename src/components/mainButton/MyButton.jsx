import "./styles.css";

const MyButton = ({ title = "next", onClick }) => {
  return (
    <div>
      <div className="wrapper button">
        <button className="cta" onClick={onClick}>
          <span className="text">{title}</span>
          <span className="arrow-wrapper">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="arrow"
                d="M5 12h13M12 5l7 7-7 7"
                fill="none"
                stroke="#EA2636"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default MyButton;
