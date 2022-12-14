import { FC } from "react";
import Image from "next/image";

import { useRouter } from "next/router";

import { Box, Grid, Typography } from "@mui/material";

import styles from "./Category.module.css";

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
      sm={4}
      mb={2}
    >
      <Box textAlign="center">
        <Box className={styles.imageWrapper}>
          <Image
            src={categoryImage}
            height={600}
            width={600}
            alt="placeholder image"
          />
        </Box>
        <Typography textAlign="center">{categoryTitle}</Typography>
      </Box>
    </Grid>
  );
};
