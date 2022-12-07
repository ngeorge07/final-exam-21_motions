import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from 'react-icons/io5';
import HeroVideo from '../components/cards/HeroVideo';
import TeamMember from '../components/cards/TeamMember';
import Header from '../components/navigation/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroVideo />

        <Box>
          <Text fontSize="22px" align="center" mx={'56'} mt={'14'}>
            21motions is a networking platform developed for content creators
            and local businesses based in Copenhagen and surroundings.
          </Text>

          <Text fontSize="22px" align="center" mx={'56'} my={'14'}>
            Our startup`s mission is to support local talent, and at the same
            time offer to Copenhagen-based businesses fresh, creative digital
            content with a local vibe, tailor-made to their real audiences.
          </Text>

          <Text fontSize="22px" align="center" mx={'56'} my={'14'}>
            Join the platform as an early bird and get free access to services
            like profile listing, professional matchmaking and production
            booking!
          </Text>
        </Box>

        <Flex
          gap={4}
          alignItems="center"
          w="100%"
          justifyContent="space-evenly"
        >
          <TeamMember name="ERZSÉBET BÁLINT" title="UX & Content" />
          <TeamMember name="GEORGE NICOLAE" title="Frontend Developer" />
          <TeamMember name="JENS STANEK" title="Super Coach" />
        </Flex>
      </main>

      <footer>
        <Text fontSize="22px" align="center" mx={'56'} mt={'24'}>
          Not ready yet? Follow our journey on Social Media:
        </Text>

        <HStack justifyContent="center" gap={4} mt={3} mb={14}>
          <Icon boxSize={7} as={IoLogoLinkedin}></Icon>
          <Icon boxSize={7} as={IoLogoFacebook}></Icon>
          <Icon boxSize={7} as={IoLogoYoutube}></Icon>
          <Icon boxSize={7} as={IoLogoInstagram}></Icon>
          <Icon boxSize={7} as={IoLogoTiktok}></Icon>
        </HStack>
      </footer>
    </>
  );
}
