import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HeroTitle from "../components/HeroTitle";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HeroTitle></HeroTitle>

      <div className="grid grid-cols-12 w-11/12 mx-auto gap-6">
        <div className="col-span-3 border">
          <Categories></Categories>
        </div>
        <div className="col-span-9 border">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
