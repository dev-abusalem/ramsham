import React from "react";
import WalmartHeader from "./WalmartHeader";
import WalmartSubHeader from "./WalmartSubHeader";
import walmart from "../../assets/images/walmart/walmart-bg.png";
const WalmartMain = () => {
  const [showSubManu, setShowSubManu] = React.useState("");

  return (
    <>
      <WalmartHeader />
      <WalmartSubHeader
        showSubManu={showSubManu}
        setShowSubManu={setShowSubManu}
      />
      <img
        onClick={() => setShowSubManu("")}
        src={walmart}
        alt="walmart"
        className="w-full h-full"
      />
    </>
  );
};

export default WalmartMain;
