import type { NextPage } from "next";
import { BaseLayout } from "layouts/BaseLayout";

import { Categories } from "components/Categories/Categories.component";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Categories />
    </BaseLayout>
  );
};

export default Home;
