import Banner from "../bunner/Bunner";
import CardItemUnderline from "../cardItemUnderline/CardItemUnderline";
import HomeExplore from "../homeExplore/homeExplore";
import ListItem from "./ListItem";

const DATA_ITEM = [
  `Designing an operating model for an investment corporation involves outlining the key processes,
 structures, and systems necessary to effectively manage investments and generate returns for stakeholders. 
Here's a framework for an investment corporation operating model: `,
];

const Project = () => {
  return (
    <dev className="project-container">
      <Banner title={"Project"} imgUrl={"/images/project.png"} />
      <div>
        <CardItemUnderline
          title={"Welcome to UAE International Investments"}
          description={DATA_ITEM}
          regards={false}
        />
        <div>
          <ListItem />
        </div>
        <div>
          <CardItemUnderline
            description={[
              `This operating model provides a comprehensive framework for managing the full lifecycle of investments within an
             investment corporation,
             from strategy development and deal sourcing to portfolio management and exit planning.
             Adaptations may be necessary based on the specific focus, size, and objectives of the investment corporation.`,
            ]}
            regards={false}
          />
        </div>
      </div>
      <div>
        <HomeExplore />
      </div>
    </dev>
  );
};

export default Project;
