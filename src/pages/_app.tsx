import Layout from "@/components/Layout"
import { CustomChakraProvider } from "@/providers/chakra"
import moment from "moment"
import "moment/locale/es"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { ReactElement, ReactNode, useEffect } from "react"
import * as gtag from "../lib/gtag"

moment.locale("es")

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <CustomChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomChakraProvider>
  )
}

export default App
