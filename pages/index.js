import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import HeroVideo from '../components/cards/HeroVideo';
import TeamWrapper from '../components/cards/TeamWrapper';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import MainSection from '../components/templates/MainSection';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroVideo />

        <MainSection>
          <Heading as="h2" variant="h2">
            Who we are?
          </Heading>

          <VStack
            gap={{ base: 5, md: 10 }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <Text variant={'body-paragraph'}>
              We are a growing community of creatives based in Copenhagen, with
              the passion for capturing the stories of local businesses.
            </Text>

            <Text variant={'body-paragraph'}>
              Our mission is to facilitate the creation of professional video
              content through collaborations and support local talent.
            </Text>

            <Text variant={'body-paragraph'}>
              21motions.dk serves as a matchmaking platform with profiles of
              content creators and businesses based in Denmark.
            </Text>

            <Text variant={'body-paragraph'}>
              Join the community today and get access to our free services!
            </Text>
          </VStack>
        </MainSection>

        <MainSection>
          <Heading as="h2" variant="h2">
            Get in touch
          </Heading>

          <VStack
            gap={{ base: 5, md: 10 }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <Text variant={'body-paragraph'}>
              Meet the team behind 21motions! Connected by passion, dedication
              and growth mindset. Let&apos;s have a chat and create an impact
              together!
            </Text>

            <Text variant={'body-paragraph'}>
              Join us today!{' '}
              <Box as="span" display="inline-block">
                Say{' '}
                <Link
                  variant="inline-link"
                  href="mailto: hello@21motions.com"
                  isExternal
                >
                  hello@21motions.com
                </Link>{' '}
                👋
              </Box>
            </Text>
          </VStack>
        </MainSection>

        <MainSection>
          <TeamWrapper />
        </MainSection>
      </main>

      <Footer />
    </>
  );
}
