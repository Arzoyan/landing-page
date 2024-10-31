const RightSectionItem = ({ data, title }) => {
  return (
    <>
      <div className="item-container">
        <div className="title-section">
          <h4 className="title">{title}</h4>
        </div>
        <div className="data-section">
          {data.map((item) => {
            return (
              <div key={item} className="data-item">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RightSectionItem;
