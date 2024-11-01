import Advantages from "../advantages/Advantages";
import AdvantagesMobile from "../advantages/AdvantagesMobile";
import Banner from "../bunner/Bunner";
import OurApproach from "../ourApproach/OurApproach";
import ServicesWeOffer from "../servicesWeOffer/ServicesWeOffer";
import WhereWeInvest from "../whereWeInvest/WhereWeInvest";

const AboutAs = () => {
  return (
    <div>
      <Banner title={"About Us"} imgUrl={"/images/about-us.png"} />
      <OurApproach />
      <div>
        <ServicesWeOffer dataCount={5} />
      </div>
      <div>
        <WhereWeInvest />
      </div>
      <div>
        <Advantages />
        <AdvantagesMobile />
      </div>
    </div>
  );
};

export default AboutAs;
