import Document, { Html, Head, Main, NextScript } from "next/document"

import { AppConfig } from "../utils/AppConfig"

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html
        lang={AppConfig.locale}
        className="scrollbar-thin overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
