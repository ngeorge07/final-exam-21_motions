import { Flex, Heading, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import HeroLink from '../HeroLink';

export default function PropositionCard() {
  return (
    <VStack w="fit-content" zIndex={2} mt={20}>
      <Heading as="h1" variant="h1">
        ROOTED IN CREATIVITY. CONNECTED BY GROWTH
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW={{ sm: '500px' }}
        w={{ base: '90%' }}
        justifyContent="space-between"
        gap="5"
        alignItems={['center']}
      >
        <HeroLink as={NextLink} href="/test" variant="secondary">
          CONTENT CREATORS
        </HeroLink>
        <HeroLink as={NextLink} href="/test" variant="primary">
          FOR LOCAL BUSINESSES
        </HeroLink>
      </Flex>
    </VStack>
  );
}
