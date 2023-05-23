import { Box } from "@mui/material";
import MainCategoryCard from "components/MainCategoriesList/MainCategoryCard";
import { Category } from "types";

type MainCategoriesListProps = {
  mainCategories: Array<string>;
  categories: Array<Category>;
};
const MainCategoriesList = ({
  mainCategories,
  categories,
}: MainCategoriesListProps) => {
  return (
    <Box className="category-container">
      {mainCategories.map((categoryLabel) => {
        const categoryDetails = categories.filter(
          (item) => item.categoryLabel === categoryLabel
        );
        return <MainCategoryCard currentCategoryLabel={categoryLabel} subCategories={categoryDetails}></MainCategoryCard>;
      })}
    </Box>
  );
};
export default MainCategoriesList;
