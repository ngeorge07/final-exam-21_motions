import { Box, Flex, Text } from '@chakra-ui/react';

import HeroVideo from '../components/cards/HeroVideo';
import TeamMember from '../components/cards/TeamMember';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroVideo />

        <Box mx="auto" maxW={[300, 500, 750]} textAlign="center">
          <Text fontSize="22px" align={['left', 'center']} mt={'14'}>
            21motions is a networking platform developed for content creators
            and local businesses based in Copenhagen and surroundings.
          </Text>

          <Text fontSize="22px" align={['left', 'center']} my={'14'}>
            Our startup`s mission is to support local talent, and at the same
            time offer to Copenhagen-based businesses fresh, creative digital
            content with a local vibe, tailor-made to their real audiences.
          </Text>

          <Text fontSize="22px" align={['left', 'center']} my={'14'}>
            Join the platform as an early bird and get free access to services
            like profile listing, professional matchmaking and production
            booking!
          </Text>
        </Box>

        <Flex
          direction={['column', 'row']}
          gap={4}
          alignItems="center"
          w="100%"
          justifyContent="space-evenly"
          maxW={[300, 500, 750]}
          mx="auto"
        >
          <TeamMember name="ERZSÉBET BÁLINT" title="UX & Content" />
          <TeamMember name="GEORGE NICOLAE" title="Frontend Developer" />
          <TeamMember name="JENS STANEK" title="Super Coach" />
        </Flex>
      </main>

      <Footer />
    </>
  );
}
