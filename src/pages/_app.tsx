import React, { ReactElement, ReactNode, useEffect } from 'react';

import Blobity from 'blobity';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import Default from '../layouts/Default';

import '../styles/main.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const blobity = new Blobity({
      licenseKey: 'lokecarlsson',
      color: ['#4B2EC5', '#FB44E3'],
      dotColor: '#4B2EC5',
      zIndex: 55,
      opacity: 0.35,
      magnetic: false,
    });
    console.log(blobity);
  }, []);

  // Use the layout defined at the page level, if available and fallback to Default layout
  const getLayout = Component.getLayout
    ? (page: JSX.Element) => page
    : (page: JSX.Element) => <Default>{page}</Default>;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return getLayout(<Component {...pageProps} />);
}
