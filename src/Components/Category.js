import React from "react";
import CategoryItem from "./CategoryItem";

export default function Category({ headline, items }) {
  //props will get a headline and  an array full of movies
  return (
    <div>
      <h3 className="">{headline}</h3>
      <div className="flex flex-row">
        {items.map((item, key) => {
          return (
            <CategoryItem
              key={key}
              href={items.href}
              src={item.src}
              alt={item.alt}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}
