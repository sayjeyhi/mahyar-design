import React, { ReactElement, ReactNode } from "react"

import { NextPage } from "next"
import { AppProps } from "next/app"

import Default from "layouts/Default"

import "windi.css"
import "styles/main.css"
// windicss layers
import "windi-base.css"
import "windi-components.css"
// windicss utilities should be the last style import
import "windi-utilities.css"
// windicss devtools support (dev only)
import "windi-devtools"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available and fallback to Default layout
  const getLayout = Component.getLayout
    ? (page: JSX.Element) => page
    : (page: JSX.Element) => <Default>{page}</Default>

  // eslint-disable-next-line react/jsx-props-no-spreading
  return getLayout(<Component {...pageProps} />)
}
