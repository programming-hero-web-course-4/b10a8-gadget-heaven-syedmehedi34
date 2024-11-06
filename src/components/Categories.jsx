import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Categories = ({ category }) => {
  return (
    <div>
      <Link
        to={`/category/${category.category}`}
        className="text-textOF60 font-[500] text-sm"
      >
        <div className="w-full bg-[#09080F0D] rounded-[32px] py-[10px] px-4 click">
          {category.category}
        </div>
      </Link>
    </div>
  );
};

export default Categories;
