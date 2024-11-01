import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/header/index";
import HomePage from "./components/homePage/HomePage";
import AboutAs from "./components/aboutAs/AboutAs";
import History from "./components/history/History";
import Project from "./components/project/Project";
import ContactUsPage from "./components/contactUs/ContactUsPage";
import MainFooter from "./components/footer/MainFooter";

import "./styles/main.scss";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header />
        <Content
          style={{
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutAs />} />
              <Route path="/history" element={<History />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#FFF",
          }}
        >
          <div>
            <MainFooter />
          </div>
          <div
           className="footer-bottom"
          >
            <div>© 2023 UAE INTERNATIONAL INVESTMENTS</div>
            <div
              className="footer-bottom-right"
            >
              <h5>Phishing and Fraud Awareness</h5>
              <h5>Legal</h5>
              <h5>Privacy Policy</h5>
            </div>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
