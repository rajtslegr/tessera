import { ReactNode } from "react"
import { Head } from "blitz"
import { Box, Container } from "@chakra-ui/layout"

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

      <Container pt={14}>{children}</Container>
    </>
  )
}

export default Layout
