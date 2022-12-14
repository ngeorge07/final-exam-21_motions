import { Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import HeroImage from '../components/cards/HeroImage';
import CarouselContainer from '../components/CarouselContainer';
import HeroLink from '../components/HeroLink';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import MainSection from '../components/templates/MainSection';

export default function business() {
  return (
    <>
      <Header />

      <main>
        <HeroImage />

        <MainSection sectionHeading="How to get started?">
          <Text variant={'body-paragraph'}>
            Whether you are an experienced professional or a new talent in video
            production, being part of 21motions helps you to showcase your work,
            meet peers, businesses and get purposeful job opportunities.
          </Text>

          <Text variant={'body-paragraph'}>
            You can submit your application for a free membership by adding your
            areas of interests, experience and goals you want to achieve in your
            professional career path.
          </Text>

          <Text variant={'body-paragraph'}>
            After your application is processed, you can update your creator
            page and match with local businesses looking for video creators to
            tell their stories.
          </Text>

          <Text variant={'body-paragraph'}>
            Let&apos;s grow and shape Copenhagen&apos;s creative community
            together! Start your application today and join the team!
          </Text>

          <HeroLink
            as={NextLink}
            href="/business"
            variant="primary"
            alignSelf="center"
            maxW={{ base: '300px', md: '280px' }}
          >
            Start here
          </HeroLink>
        </MainSection>

        <CarouselContainer />

        <MainSection sectionHeading="Share your ideas">
          <Text variant={'body-paragraph'}>
            Contribute to the creative community&apos;s growth by{' '}
            <Link variant="inline-link" href="#">
              sharing your experience
            </Link>{' '}
            and perspective! We&apos;re open to suggestions and looking forward
            to having a chat with you!
          </Text>

          <Text variant={'body-paragraph'}>
            Say{' '}
            <Link
              variant="inline-link"
              href="mailto: hello@21motions.com"
              isExternal
            >
              hello@21motions.com
            </Link>{' '}
            👋
          </Text>
        </MainSection>
      </main>

      <Footer />
    </>
  );
}
