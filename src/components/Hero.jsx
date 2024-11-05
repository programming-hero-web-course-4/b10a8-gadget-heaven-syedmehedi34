import { Link } from "react-router-dom";
import bannerImg from "/assets/banner.jpg";
const Hero = () => {
  return (
    <div className="relative mb-64">
      <div className="mx-5 px-1 pb-1 border border-t-0 rounded-b-[32px]">
        <div className="bg-primary h-full rounded-b-[32px]">
          <h1 className="text-[30px] md:text-[40px] lg:text-[46px] font-bold text-center text-white w-3/4 mx-auto pt-7">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white w-2/3 mx-auto text-center mt-5 text-sm md:text-[1rem]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="w-fit mx-auto mt-7 pb-[230px]">
            <Link to="/dashboard">
              <button className="rounded-[32px] btn text-primary font-bold bg-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] w-[70%]  flex items-center justify-center absolute transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="p-[6px] w-full  border border-white rounded-[24px]">
          <img
            className="w-full mx-auto h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-[24px]"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
