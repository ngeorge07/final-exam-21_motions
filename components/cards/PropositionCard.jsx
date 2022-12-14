import { Flex, Heading, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import HeroLink from '../HeroLink';

export default function PropositionCard({ text, linkText, isHome }) {
  return (
    <VStack w="fit-content" zIndex={2} mt={20}>
      <Heading as="h1" variant="h1">
        {text}
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW={{ sm: '500px' }}
        w="90%"
        justifyContent={isHome ? 'space-between' : 'center'}
        alignItems="center"
        gap="5"
      >
        {isHome && (
          <HeroLink as={NextLink} href="/" variant="secondary">
            Video creators
          </HeroLink>
        )}

        <HeroLink
          as={NextLink}
          href="/business"
          variant="primary"
          w={
            isHome
              ? { base: '98%', md: '50%' }
              : { base: '98%', sm: '70%', md: '80%' }
          }
        >
          {linkText}
        </HeroLink>
      </Flex>
    </VStack>
  );
}
