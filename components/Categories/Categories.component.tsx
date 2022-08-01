import { Grid } from "@mui/material";

import { Category } from "components/Category/Category.component";

const categories = [
  {
    categoryTitle: "Peaks",
    categoryId: 1,
    categoryImage:
      "https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562710262349-VSOYX8VZYQQF5JF5HOV9/65.jpg?format=1000w",
  },
  {
    categoryTitle: "Coast",
    categoryId: 2,
    categoryImage:
      "https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562710303726-HN4N2S110UN9FFW6SQ9K/1.jpg?format=1000w",
  },
  {
    categoryTitle: "Wildlife",
    categoryId: 3,
    categoryImage:
      "https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562710337910-ETNNKGNBU2IPDFJFZAC7/3.jpg?format=1000w",
  },
  {
    categoryTitle: "Seafaring",
    categoryId: 4,
    categoryImage:
      "https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562710379262-HJY43PPFCTN2331DQ67P/73.jpg?format=1000w",
  },
  {
    categoryTitle: "Horizon",
    categoryId: 5,
    categoryImage:
      "https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562710947533-PD7S2GHDGL0WJXMOCTUR/download+%2811%29.jpeg?format=1000w",
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
