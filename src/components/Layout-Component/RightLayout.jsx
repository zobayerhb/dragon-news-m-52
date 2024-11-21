import Advertise from "../Advertise/Advertise";
import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightLayout = () => {
  return (
    <div>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <Advertise></Advertise>
    </div>
  );
};

export default RightLayout;
