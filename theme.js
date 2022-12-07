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
        bg: mode('#fff', '#212121')(props),
        color: mode("#000", "#fff")(props)
      },
    }),
  },
}

const theme = extendTheme(overrides);

export default theme;
