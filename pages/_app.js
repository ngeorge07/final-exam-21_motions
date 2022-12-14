import "@fontsource/mohave/400.css";
import "@fontsource/mohave/500.css";
import "@fontsource/mohave/600.css";
import "@fontsource/mohave/700.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/600.css";


import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import theme from "../theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
