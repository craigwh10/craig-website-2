import type { AppProps } from 'next/app'

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp