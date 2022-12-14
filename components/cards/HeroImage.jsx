import { Grid, GridItem, Image } from '@chakra-ui/react';
import PropositionCard from './PropositionCard';

export default function HeroImage({ text, linkText }) {
  return (
    <Grid as="section" display="grid">
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
        <Image
          objectPosition={{ md: '0 38%' }}
          fit="cover"
          src="/business/business-hero.jpg"
          alt="hero"
          width="100vw"
          height="70vh"
          boxShadow="black 0px 0px 25px 5px"
        ></Image>
      </GridItem>
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={2}
        alignSelf="center"
        justifySelf="center"
      >
        <PropositionCard text={text} linkText={linkText} />
      </GridItem>
    </Grid>
  );
}
