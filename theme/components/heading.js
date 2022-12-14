
const Heading = {
  variants: {
    h1: {
      fontSize: [37, 45, 58, 58, 58],
      maxW: { sm: '500px' },
      color: '#fff',
      textAlign: ['center'],
    },

    h2: {
      textAlign: { md: 'center' },
      fontWeight: 'semibold',
      mb: { base: 2.5, md: 5 },
    },

    'review-heading': {
      fontSize: 18,
      fontFamily: `'Roboto', sans-serif`,
      fontWeight: 'semibold',
    },
  },
};

export default Heading;
