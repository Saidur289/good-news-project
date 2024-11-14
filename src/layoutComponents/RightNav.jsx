import FindUs from "../components/FindUs";
import SocialLogin from "../components/SocialLogin";


const RightNav = () => {
    return (
        <div className="space-y-5">
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
        </div>
    );
};

export default RightNav;