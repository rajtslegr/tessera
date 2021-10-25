import { Box, Flex } from "@chakra-ui/layout"
import Sidebar from "app/navigation/components/SideBar"
import { Head } from "blitz"
import React, { ReactNode } from "react"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "tessera"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display={{ md: "flex" }}>
        <Sidebar />

        <Box flex="1" minW="0">
          <Box px={5} mx="auto" minH="76vh">
            <Flex>
              <Box minW="0" flex="auto" px={{ base: "4", sm: "6", xl: "8" }} pt="10">
                {children}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Layout
