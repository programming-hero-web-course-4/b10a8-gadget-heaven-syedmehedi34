import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Categories = ({ category }) => {
  return (
    <div>
      <Link
        to={`/category/${category.category}`}
        className="text-textOF60 font-[500]"
      >
        <div className="w-full bg-[#09080F0D] rounded-[32px] py-[10px] pl-5 click">
          {category.category}
        </div>
      </Link>
    </div>
  );
};

export default Categories;
