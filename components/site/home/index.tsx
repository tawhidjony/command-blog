
import BlogView from "./blog/blog.view";
import CategoryView from "./category/category.view";
import HeroSectionView from "./hero/heroSection.view";
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
