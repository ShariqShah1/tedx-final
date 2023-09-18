import React from "react";
import UpperDesign from "./UpperDesign";
import Wrapper from "./Wrapper";
import Card from "./Card";
import RevealY from "./RevealY";
const Contact = () => {
  return (
    <div className="lg:h-screen h-auto">
      <Wrapper className={"h-full"}>
        <UpperDesign heading={"Contact Us"} />
        <div className="lg:pt-16 lg:px-10 pt-4">
        <RevealY>
          <div className="flex items-center lg:gap-x-24 justify-center flex-col lg:flex-row gap-y-5 lg:h-[450px]">
          
            <Card
              title={"Lead Organizer"}
              name={"Murtaza Lashari"}
              email={"lashari.murtaza1@gmail.com"}
              number={"+92-321-1242710"}
              src={"/assets/lashari.jpg"}
            />
            
            {/* <RevealY> */}
            <Card
              title={"Co-Organizer"}
              name={"Asad Solangi"}
              email={"asadsolangi003@gmail.com"}
              number={"+92-312-1352862"}
              src={"/assets/asad.jpg"}
            />
            {/* </RevealY> */}
        
          </div>
          </RevealY>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
