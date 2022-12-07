import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

export default function TeamMember({ name, title }) {
  return (
    <Flex align="center" direction="column">
      <Avatar
        size="2xl"
        name={name}
        bg="teal.500"
        src={`/home/${name.split(' ')[0]}-portrait.webp`}
      />
      <Heading mt={5} mb={2} fontSize={22} size="md" fontWeight={500}>
        {name}
      </Heading>
      <Text fontSize={22}>{title}</Text>
    </Flex>
  );
}
