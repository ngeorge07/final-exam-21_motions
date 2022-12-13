const Link = {
  variants: {
    'inline-link': {
      color: '#A6FF5F',
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
        backgroundColor: '#A6FF5F',
        transition: 'width 0.2s cubic-bezier(0.73, 0, 0.38, 1)',
      },
      _active: {
        _after: {
          width: '100%',
        },
      },
    },
  },
};

export default Link;
