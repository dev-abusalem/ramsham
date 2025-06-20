import DribbleHeader from "./DribbleHeader";
import dribble from "../../assets/images/dribble/dribble.png";

const DribbbleMain = () => {
  return (
    <>
      <DribbleHeader />
      <img src={dribble} alt="webMd" className="w-full h-full" />
    </>
  );
};

export default DribbbleMain;
