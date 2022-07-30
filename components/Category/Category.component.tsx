import { FC } from "react";
import Image from "next/image";

import { useRouter } from "next/router";

import { Grid, Typography } from "@mui/material";

interface ICategory {
  categoryTitle: string;
  categoryId: number;
  categoryImage: string;
}

export const Category: FC<ICategory> = ({ categoryTitle, categoryImage }) => {
  const router = useRouter();

  return (
    <Grid
      onClick={() => {
        router.push(`/categories/${categoryTitle}`);
      }}
      item
      xs={12}
      mb={2}
    >
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
