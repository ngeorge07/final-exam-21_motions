import { Avatar, Flex, Text } from '@chakra-ui/react';

export default function TeamMember({ name, title }) {
  return (
    <Flex direction="column" alignItems="center">
      <Avatar size="lg" name={name} bg="teal.500" />
      <Text>{title}</Text>
    </Flex>
  );
}
