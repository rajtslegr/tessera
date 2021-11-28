import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { useCurrentUser } from 'app/core/hooks/useCurrentUser';
import { Link, Routes, useMutation } from 'blitz';
import logout from '../mutations/logout';

const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (currentUser) {
    return (
      <>
        <Button
          onClick={async () => {
            await logoutMutation();
          }}
        >
          Logout
        </Button>
        <Box>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </Box>
      </>
    );
  } else {
    return (
      <Box>
        <Flex flexDirection="row" justify="center">
          <Button mx={2}>
            <Link href={Routes.SignupPage()}>
              <strong>Sign Up</strong>
            </Link>
          </Button>
          <Button mx={2}>
            <Link href={Routes.LoginPage()}>
              <strong>Login</strong>
            </Link>
          </Button>
        </Flex>
      </Box>
    );
  }
};

export default UserInfo;
