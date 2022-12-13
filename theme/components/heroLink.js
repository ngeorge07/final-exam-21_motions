const HeroLink = {
  baseStyle: {
    textAlign: 'center',
    py: 3,
    borderRadius: 8,
    fontWeight: 'semibold',
    fontSize: 20,
    maxW: { base: '320px', sm: '390px' },
    w: { base: '100%', md: '50%' },
  },
  variants: {
    primary: (props) => ({
      color: 'white',
      //   backgroundColor: mode('inchworm', 'american_green')(props),
      backgroundColor: 'american_green',
    }),
    secondary: (props) => ({
      color: 'black',
      //   backgroundColor: mode('inchworm', 'american_green')(props),
      backgroundColor: 'white',
    }),
  },
};

export default HeroLink;
