import React from "react";
import CategoryItem from "./CategoryItem";

export default function Category({ headline, items }) {
  //props will get a headline and  an array full of movies
  return (
    <div>
      <h3 className="">{headline}</h3>
      <div className="flex flex-row">
        {items.map((item, key) => {
          const id = item._id;
          return (
            <CategoryItem
              key={key}
              href={`/movies/${id}`}
              src={item.imgSrc}
              alt={item.name}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}
