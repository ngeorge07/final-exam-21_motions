import { Button, Flex, Heading, VStack } from '@chakra-ui/react';

export default function PropositionCard() {
  return (
    <VStack w="fit-content" zIndex={2} mt={20}>
      <Heading
        fontSize={[37, 40, 58]}
        maxW="500px"
        color="#fff"
        textAlign={['center']}
      >
        ROOTED IN CREATIVITY. CONNECTED BY GROWTH
      </Heading>

      <Flex
        direction={['column', 'row']}
        maxW="500px"
        w="100%"
        justifyContent="space-between"
        gap="5"
        alignItems={['center']}
      >
        <Button
          fontSize={20}
          variant="solid"
          color="#fff"
          w={['75%', '100%']}
          bgColor="green_grass"
          _hover={{
            backgroundColor: 'green_grass',
            borderWidth: '2px',
            borderColor: '#fff',
          }}
        >
          CONTENT CREATORS
        </Button>
        <Button
          fontSize={20}
          variant="solid"
          color="#000"
          w={['75%', '100%']}
          bgColor="#fff"
          _hover={{
            backgroundColor: '#fff',
            borderWidth: '2px',
            borderColor: '#000',
          }}
        >
          FOR LOCAL BUSINESSES
        </Button>
      </Flex>
    </VStack>
  );
}
