import { Box } from '@chakra-ui/layout';
import UserInfo from 'app/auth/components/UserInfo';
import Layout from 'app/core/layouts/Layout';
import { BlitzPage } from 'blitz';
import { Suspense } from 'react';

const Home: BlitzPage = () => {
  return (
    <Box>
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </Box>
  );
};

Home.suppressFirstRenderFlicker = true;
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>;

export default Home;
