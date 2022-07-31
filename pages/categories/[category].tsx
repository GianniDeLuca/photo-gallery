import type { NextPage } from "next";
import { BaseLayout } from "layouts/BaseLayout";

import { Typography } from "@mui/material";
import Image from "next/image";

const CategoryPage: NextPage = () => {
  return (
    <BaseLayout>
      <Typography textAlign="center" my={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562102954840-OPQ2S3VR9JDZS2XLMAAT/65.jpg?format=750w"
        height={500}
        width={750}
        alt="placeholder image"
      />
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562102954840-OPQ2S3VR9JDZS2XLMAAT/65.jpg?format=750w"
        height={500}
        width={750}
        alt="placeholder image"
      />
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5cdc8db64d546e01b837cea4/1562102954840-OPQ2S3VR9JDZS2XLMAAT/65.jpg?format=750w"
        height={500}
        width={750}
        alt="placeholder image"
      />
    </BaseLayout>
  );
};

export default CategoryPage;
