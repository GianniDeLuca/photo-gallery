import type { NextPage } from "next";
import { BaseLayout } from "layouts/BaseLayout";

import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";

const CategoryPage: NextPage = () => {
  return (
    <BaseLayout>
      <Box textAlign="center">
        <Grid container justifyContent="center">
          <Grid textAlign="center" item xs={12} sm={8} md={7} lg={6}>
            <Typography my={10} sx={{ typography: { sm: "h5", lg: "h4" } }}>
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
              src="https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562102954840-OPQ2S3VR9JDZS2XLMAAT/65.jpg?format=2500w"
              height={1667}
              width={2500}
              alt="placeholder image"
            />
          </Grid>
          <Grid item xs={12}>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562102954840-OPQ2S3VR9JDZS2XLMAAT/65.jpg?format=2500w"
              height={1667}
              width={2500}
              alt="placeholder image"
            />
          </Grid>
          <Grid item xs={12}>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562102954840-OPQ2S3VR9JDZS2XLMAAT/65.jpg?format=2500w"
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
