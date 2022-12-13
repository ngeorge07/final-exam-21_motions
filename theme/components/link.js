import { mode } from '@chakra-ui/theme-tools';

const Link = {
  variants: {
    'inline-link': (props) => ({
      color: mode('american_green', 'inchworm')(props),
      display: 'inline-flex',
      flexDirection: 'column',
      _hover: {
        textDecoration: 'none',
        _after: {
          width: '100%',
        },
      },
      _after: {
        content: `""`,
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
