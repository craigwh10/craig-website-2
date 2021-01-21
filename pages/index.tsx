import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

import { Button } from '../.storybook/components/Elements';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 1rem;
 }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
        <GlobalStyle />
        <h1>Hello, world!</h1>
        <Button text="hi" />
    </>
  );
}