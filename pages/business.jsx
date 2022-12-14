import { Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import HeroImage from '../components/cards/HeroImage';
import CarouselContainer from '../components/CarouselContainer';
import HeroLink from '../components/HeroLink';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import MainSection from '../components/templates/MainSection';

export default function creator() {
  return (
    <>
      <Header />

      <main>
        <HeroImage
          text="CONNECT WITH THE BEST MATCHING VIDEO CREATORS"
          linkText="Start a collaboration"
        />

        <MainSection sectionHeading="Do you have a story to tell?">
          <Text variant={'body-paragraph'}>
            We are supporting your company with tailor-made video content
            optimized for your marketing channels. Being a business member of
            21motions, you can onboard multiple creative heads for your project
            while we take care of both the quality as the in-time delivery.
          </Text>

          <Text variant={'body-paragraph'}>
            Try out the new way of content creation and engage better with your
            customers! Here you can find the best matching creatives based in
            Copenhagen.
          </Text>

          <Text variant={'body-paragraph'}>
            Create a company profile for free and get multiple offers for your
            specific needs.
          </Text>

          <video controls width="600px">
            <source src="/business/21motions_promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

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

        <MainSection sectionHeading="Hear from business members">
          <CarouselContainer />
        </MainSection>

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
