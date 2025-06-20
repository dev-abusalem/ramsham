import Header from "./Header";
import webMd from "../../assets/images/webMd.png";
const WebMd = () => {
  return (
    <>
      <Header />
      <img src={webMd} alt="webMd" className="w-full h-full" />
    </>
  );
};

export default WebMd;
