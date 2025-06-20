import BBCHeader from "./BBCHeader";
import bbc from "../../assets/images/bbc/bbc.png";
const BBCMain = () => {
  return (
    <>
      <BBCHeader />
      <img src={bbc} alt="bbc" className="w-full h-full" />
    </>
  );
};

export default BBCMain;
