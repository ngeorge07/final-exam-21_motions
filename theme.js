import { extendTheme, theme as base } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: `'Mohave', sans-serif, ${base.fonts?.heading}`,
    body: `'Mohave', sans-serif, ${base.fonts?.body}`,
  },
};

// 3. extend the theme
const theme = extendTheme(config);

export default theme;
