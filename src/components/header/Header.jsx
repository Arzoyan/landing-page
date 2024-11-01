import { Layout } from "antd";
import Navbar from "../navbur/index";
import Image from "../image/Image";
import logo from "/Logo.svg";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const { Header } = Layout;
const MainHeader = () => {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();

  return (
    <>
      <Header className="container header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo">
              <Link
                to={`/`}
                onClick={() => {
                  if (showHeader) {
                    setShowHeader(false);
                  }
                }}
              >
                <Image src={logo} width={"100%"} height={"100%"} />
              </Link>
            </div>
          </div>
          <div className="header-center">
            <Navbar
              itemList={[
                { label: "About", url: "/about" },
                { label: "History", url: "/history" },
                { label: "Project", url: "/project" },
                { label: "Contact Us", url: "/contact-us" },
              ]}
            />
          </div>
          <div
            className="burger-menu"
            onClick={() => setShowHeader(!showHeader)}
          >
            <Image
              src={showHeader ? "/close-icon.svg" : "/burger.svg"}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </Header>

      {/* Popup Menu */}
      {showHeader && (
        <div className="mobile-popup">
          <nav className="mobile-nav">
            {["About", "History", "Project", "Contact Us"].map(
              (label, index) => {
                const path = `/${label.toLowerCase().replace(" ", "-")}`;
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={index}
                    to={path}
                    className={`mobile-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => setShowHeader(false)}
                  >
                    {label}
                  </Link>
                );
              },
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default MainHeader;
