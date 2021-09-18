import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = ({ defaultCategories = [] }) => {
  // const [categories, setCategories] = useState(["Messi"]);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1>Gif APP</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifApp;
