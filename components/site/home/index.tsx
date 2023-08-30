import React from "react";
import HeroSectionView from "./hero/heroSection.view";
import CategoryView from "./category/category.view";
import BlogView from "./blog/blog.view";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <HeroSectionView />
      <CategoryView />
      <BlogView />
    </>
  );
};

export default HomePage;
