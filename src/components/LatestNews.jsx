import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-100 p-2">
            <p className="bg-red-500 text-base-100 px-3 py-1">Latest</p>
           <Marquee pauseOnHover = {true} speed={100} className="space-x-10">
            <Link to = '/news'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laboriosam.
            </Link>
            <Link to = '/news'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laboriosam.
            </Link>
            <Link to = '/news'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laboriosam.
            </Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;