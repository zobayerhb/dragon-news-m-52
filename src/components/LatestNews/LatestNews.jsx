import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="w-11/12 mx-auto bg-base-200 p-4 flex gap-3 items-center mt-6">
      <button className="bg-[#D72050] text-white py-2 px-6">Latest</button>
      <Marquee pauseOnHover={true} className="space-x-3">
        <Link to='/' className="text-black hover:underline">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... {" "}
        </Link>
        <Link to='/' className="text-black hover:underline">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
