import { mode } from '@chakra-ui/theme-tools';

const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
    },
  },

  variants: {
    'inline-link': (props) => ({
      color: mode('american_green', 'inchworm')(props),
      display: 'inline-flex',
      flexDirection: 'column',
      _hover: {
        _after: {
          width: '100%',
        },
      },
      _after: {
        content: `""`,
        mt: -2,
        display: 'block',
        width: 0,
        height: 0.5,
        bottom: 0,
        position: 'relative',
        backgroundColor: mode('american_green', 'inchworm')(props),
        transition: 'width 0.2s cubic-bezier(0.73, 0, 0.38, 1)',
      },
      _active: {
        _after: {
          width: '100%',
        },
      },
    }),
  },
};

export default Link;
