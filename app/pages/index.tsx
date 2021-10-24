import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import { Box, Container, Flex, Spacer } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <Button
          onClick={async () => {
            await logoutMutation()
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
    )
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
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <Box>
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </Box>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
