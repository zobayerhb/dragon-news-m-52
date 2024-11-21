import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftLayout = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  console.log(categories);
  return (
    <div>
      <h2 className="font-semibold text-xl">
        All Category {categories.length}
      </h2>
      <div className="flex flex-col gap-2 mt-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn bg-base-100 border-none justify-start text-gray-500"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftLayout;
