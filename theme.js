import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: `'Mohave', sans-serif, ${base.fonts?.heading}`,
    body: `'Mohave', sans-serif, ${base.fonts?.body}`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', '#0A0406')(props)
      },
    }),
  },
}

const theme = extendTheme(overrides);

export default theme;
