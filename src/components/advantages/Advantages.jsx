import "./styles.scss";

export const DATA_ITEMS = [
  {
    title: "Expertise",
    description: `Our team consists of highly skilled professionals with diverse backgrounds in finance,
     economics, and investment management, bringing a wealth of knowledge and expertise to every client engagement with deep
      understanding of current market intelligence and with an Agile approach.`,
  },
  {
    title: "Customized Solutions",
    description: `We understand that every client is unique, which is why we take a personalized approach to investment management,
     tailoring solutions to meet your specific needs and objectives globally.`,
  },
  {
    title: "Transparency",
    description: `Transparency and integrity are at the core of everything we do.
     We believe in open communication and providing our clients with clear and concrete facts,
     straightforward advice they can make decisions on.`,
  },
  {
    title: "Performance",
    description: `We are committed to delivering superior investment performance and generating value for our clients over the
     long term that is effective, efficient and agile.`,
  },
  {
    title: "Client-Centric",
    description: `We are dedicated to building lasting loyal friendship with our clients based
     on mutual benefit that is structured with professionalism and exceptional communication and flexibility.`,
  },
];

const Advantages = () => {
  return (
    <div className="Advantages-container">
      <div className="title-container">
        <h2 className="title">Advantages and Benefits of Working With Us</h2>
      </div>
      <div className="item-container">
        {DATA_ITEMS.map((item) => {
          return (
            <div key={item.title} className="item">
              <div className="item-title-container">
                <h2 className="item-title">{item.title}</h2>
              </div>
              <div className="item-description-container">
                <section className="item-description">
                  {item.description}
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Advantages;
