import { Grid } from "@mui/material";

import { Category } from "components/Category/Category.component";

const categories = [
  {
    categoryTitle: "Peaks",
    categoryId: 1,
    categoryImage: "https://picsum.photos/seed/picsum/600",
  },
  {
    categoryTitle: "Coast",
    categoryId: 2,
    categoryImage: "https://picsum.photos/seed/picsum/600",
  },
  {
    categoryTitle: "Wildlife",
    categoryId: 3,
    categoryImage: "https://picsum.photos/seed/picsum/600",
  },
  {
    categoryTitle: "Seafaring",
    categoryId: 4,
    categoryImage: "https://picsum.photos/seed/picsum/600",
  },
  {
    categoryTitle: "Horizon",
    categoryId: 5,
    categoryImage: "https://picsum.photos/seed/picsum/600",
  },
];

export const Categories = () => {
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Category key={category.categoryId} {...category} />
      ))}
    </Grid>
  );
};
