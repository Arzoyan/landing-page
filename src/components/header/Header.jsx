import { Layout } from "antd";
import Navbar from "../navbur/index";
import Image from "../image/Image";
import logo from "/Logo.svg";

import "./styles.scss";
import { Link } from "react-router-dom";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <>
      <Header className="container  header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo" onClick={() => {}}>
              <Link to={`/`}>
                <Image src={logo} width={"100%"} height={"100%"} />
              </Link>
            </div>
          </div>

          <div className="header-center">
            <Navbar
              itemList={[
                {
                  label: "About",
                  url: "/about",
                },
                {
                  label: "History",
                  url: "/history",
                },
                {
                  label: "Project",
                  url: "/project",
                },
                {
                  label: "Contact Us",
                  url: "/contact-us",
                },
              ]}
            />
          </div>
        </div>
      </Header>
    </>
  );
};

export default MainHeader;
