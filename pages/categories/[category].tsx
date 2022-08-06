import type { NextPage } from "next";
import { BaseLayout } from "layouts/BaseLayout";

import { Typography, Box, Grid, useTheme } from "@mui/material";
import Image from "next/image";

const CategoryPage: NextPage = () => {
  return (
    <BaseLayout>
      <Box textAlign="center">
        <Grid container justifyContent="center">
          <Grid textAlign="center" item xs={12} sm={8} md={7} lg={8}>
            <Typography my={10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Image
              src="https://picsum.photos/seed/picsum/2500/1667"
              height={1667}
              width={2500}
              alt="placeholder image"
            />
          </Grid>
          <Grid item xs={12}>
            <Image
              src="https://picsum.photos/seed/picsum/2500/1667"
              height={1667}
              width={2500}
              alt="placeholder image"
            />
          </Grid>
          <Grid item xs={12}>
            <Image
              src="https://picsum.photos/seed/picsum/2500/1667"
              height={1667}
              width={2500}
              alt="placeholder image"
            />
          </Grid>
        </Grid>
      </Box>
    </BaseLayout>
  );
};

export default CategoryPage;
