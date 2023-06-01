import React, { useState } from "react";
import "./_categories.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const keyWord = [
  "All",
  "Coding",
  "Guiter",
  "CSS",
  "Football",
  "HTML",
  "AngularJs",
  "ReactJs",
  "Algoriths",
  "Kannada Songs",
  "GitHub",
];

const Categories = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const hadleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="CategoriesBar">
      {keyWord.map((value, i) => (
        <span
          onClick={() => hadleClick(value)}
          className={activeElement === value ? "active" : ""}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default Categories;
