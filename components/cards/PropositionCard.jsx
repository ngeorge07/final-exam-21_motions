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
        w={isHome ? { base: '90%' } : '100%'}
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
          w={isHome ? { base: '98%', md: '50%' } : '90%'}
          maxW={isHome ? { base: '320px', sm: '390px' } : 'auto'}
        >
          {linkText}
        </HeroLink>
      </Flex>
    </VStack>
  );
}
