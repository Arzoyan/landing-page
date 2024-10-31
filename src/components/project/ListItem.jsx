import { useEffect, useState } from "react";
import "./ListItem.scss";
import { DATA_ITEMS } from "./constants";

const ListItem = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalItems = 12; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // State to hold items for the current page
  const [items, setItems] = useState([]);
  // State to trigger animation
  const [animate, setAnimate] = useState(false);

  // Example items data
  const itemData = Array.from({ length: totalItems }, (_, index) => ({
    title: ` ${index + 1}. ${DATA_ITEMS[index].title}`,
    description: (
      <ul>
        {DATA_ITEMS[index].description.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    ),
  }));

  // Update items based on current page
  useEffect(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    setItems(itemData.slice(start, end));

    // Trigger animation
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 700); // Match duration with animation duration

    return () => clearTimeout(timer); // Clean up timeout
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="list-item">
      <button
        disabled={!currentPage}
        className="list-item__arrow list-item__arrow--left"
        onClick={handlePrevPage}
      >
        <img
          className={`list-item__pagination-icon ${
            !currentPage ? " disabled " : ""
          }`}
          src="/left-arrow.svg"
          alt="Inactive"
        />
      </button>
      <div className="list-item__items">
        {items.map((item, index) => (
          <div
            className={`list-item__item ${animate ? "animate" : ""}`}
            key={index}
          >
            <h2 className="list-item__title">{item.title}</h2>
            <div className="list-item__description">{item.description}</div>
          </div>
        ))}
      </div>

      <button
        disabled={currentPage}
        className="list-item__arrow list-item__arrow--right"
        onClick={handleNextPage}
      >
        <img
          className={`list-item__pagination-icon  ${
            currentPage ? " disabled " : ""
          }`}
          src="/right-arrow.svg"
          alt="Active"
        />
      </button>

      {/* <div className="list-item__pagination">
        <img
          className="list-item__pagination-icon"
          src="/carousel-active.svg"
          alt="Active"
        />
        <img
          className="list-item__pagination-icon"
          src="/carousel-inactive.svg"
          alt="Inactive"
        />
      </div> */}
    </div>
  );
};

export default ListItem;
