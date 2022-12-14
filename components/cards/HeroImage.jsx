import { Grid, GridItem, Image } from '@chakra-ui/react';
import PropositionCard from './PropositionCard';

export default function HeroImage({ text, linkText, img }) {
  return (
    <Grid as="section" display="grid">
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
        <Image
          objectPosition={
            img === 'business' ? { md: '0 25%' } : { base: '25% 0' }
          }
          fit="cover"
          src={`/${img}/${img}-hero.jpg`}
          alt="hero"
          width="100vw"
          height="100vh"
          boxShadow="black 0px 0px 25px 5px"
          filter="brightness(80%)"
        />
      </GridItem>
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={2}
        alignSelf="center"
        justifySelf="center"
        zIndex={2}
      >
        <PropositionCard text={text} linkText={linkText} />
      </GridItem>
    </Grid>
  );
}
