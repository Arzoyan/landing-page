import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const Navbar = ({ itemList }) => {
  const location = useLocation(); // Get the current location object
  console.log(
    "%csrccomponents\navburNavbar.jsx:9 object",
    "color: #007acc;",
    location,
  );
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["/"]}>
      {itemList.map((item, i) => {
        console.log(
          "%csrccomponents\navburNavbar.jsx:15 location.pathname === item.url",
          "color: #007acc;",
          location.pathname,
          item.url,
        );
        return (
          <Menu.Item
            key={i}
            className={location.pathname === item.url ? "active" : ""}
          >
            <Link to={item.url}>{item.label}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default Navbar;
