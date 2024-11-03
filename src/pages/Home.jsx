import { Outlet, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HeroTitle from "../components/HeroTitle";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="bg-[#F7F7F7]">
      <Hero></Hero>
      <HeroTitle></HeroTitle>

      <div className="grid grid-cols-12 w-11/12 mx-auto gap-6">
        <div className="col-span-2">
          <div className="w-full border border-[#09080F1A] rounded-2xl bg-white p-6 grid grid-cols-1 gap-4 shadow-sm">
            {categories.map((category) => (
              <Categories
                key={category.category_id}
                category={category}
              ></Categories>
            ))}
          </div>
        </div>

        <div className="col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
