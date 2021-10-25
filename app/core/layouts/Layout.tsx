import { Container } from "@chakra-ui/layout"
import { Head } from "blitz"
import { ReactNode } from "react"

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
