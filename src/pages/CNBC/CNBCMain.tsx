import CNBCHeader from "./CNBCHeader";
import cnbc from "../../assets/images/cnbc/cnbc.png";

const CNBCMain = () => {
  return (
    <>
      <CNBCHeader />
      <img src={cnbc} alt="webMd" className="w-full h-full" />
    </>
  );
};

export default CNBCMain;
