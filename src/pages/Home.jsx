import { Outlet, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HeroTitle from "../components/HeroTitle";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="bg-[#F7F7F7]">
      <Helmet>
        <title>Home -Gadget Heaven</title>
      </Helmet>
      <Hero></Hero>
      <HeroTitle></HeroTitle>

      <div className="w-11/12 mx-auto gap-6 flex max-[1024px]:flex-col">
        <div className="min-[1150px]:w-[22%] min-[1024px]:w-[30%] w-full">
          <div className="w-full border border-[#09080F1A] rounded-2xl bg-white p-6 grid max-[450px]:grid-cols-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-1  gap-4 shadow-sm">
            {categories.map((category) => (
              <Categories
                key={category.category_id}
                category={category}
              ></Categories>
            ))}
          </div>
        </div>

        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
