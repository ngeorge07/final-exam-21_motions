import { Flex, Heading, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import HeroLink from '../HeroLink';

export default function PropositionCard({ text, linkText, isHome }) {
  return (
    <VStack w="fit-content" zIndex={2} mt={isHome ? 20 : 40}>
      <Heading as="h1" variant="h1" textShadow="rgb(0, 0, 0.5) 2px 2px">
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
          <HeroLink as={NextLink} href="/creator" variant="secondary">
            Video creators
          </HeroLink>
        )}

        <HeroLink
          as={NextLink}
          href={isHome ? '/business' : '#'}
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
