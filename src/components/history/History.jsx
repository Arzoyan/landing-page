import Banner from "../bunner/Bunner";
import CardItemUnderline from "../cardItemUnderline/CardItemUnderline";
import HomeExplore from "../homeExplore/homeExplore";

const DATA_ITEM = [
  `We are honored to extend a warm greeting to you as you explore our platform. At UAE International Investments, we understand that navigating the world of investments can feel like traversing uncharted waters. That’s why we are here—to be your trusted guide on this journey.`,
  `In today’s fast-paced and ever-changing financial landscape, making informed decisions is paramount. We am committed to ensuring that our team provides you with the knowledge, expertise, and personalized support you need to achieve set goals.`,
  `At the heart of our approach lies a deep-seated commitment to integrity, transparency, and excellence. We believe in building lasting relationships, rooted in trust and mutual respect. We are here to provide the tools, resources, and insights needed to make confident investment decisions.`,
  `As we continue to grow and evolve, our mission remains unchanged: to empower growth and build a stable and sustainable future. Thank you for choosing UAE International Investments as your partner on this journey.`,
];

const History = () => {
  return (
    <div>
      <Banner title={"History"} imgUrl={"/images/history.png"} />
      <div>
        <CardItemUnderline
          title={"Welcome to UAE International Investments"}
          description={DATA_ITEM}
        />
      </div>
      <div>
        <HomeExplore />
      </div>
    </div>
  );
};

export default History;
