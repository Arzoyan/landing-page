import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const Navbar = ({ itemList }) => {
  const location = useLocation(); // Get the current location object

  return (
    <Menu mode="horizontal" defaultSelectedKeys={["/"]}>
      {itemList.map((item, i) => {
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
