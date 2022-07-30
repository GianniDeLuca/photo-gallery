import { FC } from "react";
import Image from "next/image";

import { Grid, Typography } from "@mui/material";

interface ICategory {
  categoryTitle: string;
  categoryId: number;
  categoryImage: string;
}

export const Category: FC<ICategory> = ({ categoryTitle, categoryImage }) => {
  return (
    <Grid item xs={12} mb={2}>
      <Image
        src={categoryImage}
        height={300}
        width={300}
        alt="placeholder image"
      />
      <Typography textAlign="center">{categoryTitle}</Typography>
    </Grid>
  );
};
