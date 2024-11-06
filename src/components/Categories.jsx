import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Categories = ({ category }) => {
  return (
    <div>
      <style>
        {`
    .is-active {
      color: black ;
      font-weight: 800 ;
      }
  `}
      </style>

      <NavLink
        to={`/category/${category.category}`}
        // className="text-textOF60 font-[500] text-sm"
        className={({ isActive }) => (isActive ? "is-active" : "")}
      >
        <div className="w-full bg-[#09080F0D] rounded-[32px] py-[10px] px-4 click">
          {category.category}
        </div>
      </NavLink>
    </div>
  );
};

export default Categories;
