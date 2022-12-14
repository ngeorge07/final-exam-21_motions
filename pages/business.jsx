import { Text } from '@chakra-ui/react';
import HeroImage from '../components/cards/HeroImage';
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
        </MainSection>
      </main>
    </>
  );
}
