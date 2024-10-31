import { Collapse } from "antd";
import "./styles.scss";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "0",
    label: "Integrity",
    children: (
      <p>
        <h2>{text}</h2> <img className="collapse-img" src="/images/img-1.png" />
      </p>
    ),
  },
  {
    key: "1",
    label: "Excellence",
    children: (
      <p>
        <h2>{text}</h2> <img className="collapse-img" src="/images/img-2.png" />
      </p>
    ),
  },
  {
    key: "2",
    label: "Client-Centric",
    children: (
      <p>
        <h2>{text}</h2> <img className="collapse-img" src="/images/img-3.png" />
      </p>
    ),
  },
  {
    key: "3",
    label: "Knowledge and Expertise",
    children: (
      <p>
        <h2>{text}</h2> <img className="collapse-img" src="/images/img-4.png" />
      </p>
    ),
  },
  {
    key: "4",
    label: "Community Engagement",
    children: (
      <p>
        <h2>{text}</h2> <img className="collapse-img" src="/images/img-5.png" />
      </p>
    ),
  },
  {
    key: "5",
    label: "This is panel header 6",
    children: (
      <p>
        <h2>{text}</h2> <img className="collapse-img" src="/images/img-6.png" />
      </p>
    ),
  },
  {
    key: "6",
    label: "This is panel header 7",
    children: (
      <p>
        <h2>{text}</h2> <img className="collapse-img" src="/images/img-7.png" />
      </p>
    ),
  },
];

const MainCollapse = ({ OnClick, dataCount = 7, data = items }) => (
  <Collapse
    style={{ backgroundColor: "#f5f5f5", borderBottom: "1px solid #d9d9d9" }}
    expandIcon={({ isActive }) =>
      isActive ? <img src="/minus.svg" /> : <img src="/plase.svg" />
    }
    bordered={false}
    accordion
    items={data.slice(0, dataCount)}
    onChange={OnClick}
    className="collapse"
    defaultActiveKey={["0"]}
  />
);

export default MainCollapse;
