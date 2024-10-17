import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {DAppProvider} from '@usedapp/core';
import type {AppProps} from 'next/app';
import {memo} from 'react';

import {networkConfig} from '../config';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
    <DAppProvider config={networkConfig}>
      <Component {...pageProps} />
    </DAppProvider>
    </>
  );
});

export default MyApp;
