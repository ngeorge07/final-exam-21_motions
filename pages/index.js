import { Box, Flex, Text } from '@chakra-ui/react';
import HeroVideo from '../components/cards/HeroVideo';
import TeamMember from '../components/cards/TeamMember';
import Header from '../components/navigation/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroVideo />

        <Box position="relative">
          <Text fontSize="28px" align="center" mx={'56'} mt={'14'}>
            21motions is a networking platform developed for content creators
            and local businesses based in Copenhagen and surroundings.
          </Text>

          <Text fontSize="28px" align="center" mx={'56'} my={'14'}>
            Our startup`s mission is to support local talent, and at the same
            time offer to Copenhagen-based businesses fresh, creative digital
            content with a local vibe, tailor-made to their real audiences.
          </Text>
        </Box>

        <Flex
          gap={4}
          alignItems="center"
          w="100%"
          justifyContent="space-evenly"
        >
          <TeamMember name="Erzsebet" title="Some placeholder" />
          <TeamMember name="George" title="Some placeholder" />
          <TeamMember name="Jens" title="Some placeholder" />
        </Flex>
      </main>
    </>
  );
}
