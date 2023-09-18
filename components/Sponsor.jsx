import React from "react";
import UpperDesign from "./UpperDesign";
import Wrapper from "./Wrapper";
import Card from "./Card";
import RevealY from "./RevealY";
const Sponsor = () => {
  return (
    <div className="lg:h-screen h-auto">
      <Wrapper className={"h-full"}>
        <UpperDesign heading={"Our Sponsors"} />
        <div className="lg:pt-16 lg:px-10 pt-4 ">
        <RevealY>
          <div className="flex items-center justify-center flex-col lg:flex-row gap-y-5 flex-wrap lg:h-[550px]" >
            <Card
              title={"Rocket Digital"}
              name={"Title Sponsor"}
              email={""}
              number={""}
              src={"/assets/myrocket.jpg"}
              sp="rocket"
            />
           
            {/* <RevealY> */}
            <Card
              title={"Red Ears"}
              name={"Food Sponsor"}
              email={""}
              number={""}
              src={"/assets/laalkaan.jpg"}
              
            />
            {/* </RevealY> */}
            {/* <RevealY> */}
            <Card
              title={"AWM Enterprises"}
              name={"Gold Sponsors"}
              email={""}
              number={""}
              src={"/assets/awm.jpg"}
            />
            <Card
              title={"Rehan Foundation"}
              name={"Silver Sponsors"}
              email={""}
              number={""}
              src={"/assets/rehan.jpg"}
            />
            {/* </RevealY> */}
          </div>
          </RevealY>
        </div>
      </Wrapper>
    </div>
  );
};

export default Sponsor;
