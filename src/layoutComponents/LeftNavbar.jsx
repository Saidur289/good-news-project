import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <h1 className="font-serif mb-3">All Category ({categories.length})</h1>
      <div className="flex flex-col gap-2 pt-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn bg-base-100 border-none"
            key={category.category_id}
          >
            {category.category_name} {category.category_id}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
