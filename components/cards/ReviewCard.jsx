import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoCheckmarkSharp } from 'react-icons/io5';

export default function ReviewCard({ post }) {
  const cardBg = useColorModeValue('platinum', 'black');
  const accentTextColor = useColorModeValue('american_green', 'inchworm');

  return (
    <Card
      borderRadius="xl"
      overflow="hidden"
      backgroundColor={cardBg}
      px={10}
      py={4}
      boxShadow="rgba(0, 0, 0, 0.16) 1px 2.5px 0px, rgba(0, 0, 0, 0.23) 4.3px 0px 3px"
    >
      <CardHeader p={0}>
        <Flex
          flex="1"
          gap="4"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Box>
            <Heading size={{ base: 'md', lg: 'lg' }}>Segun Adebayo</Heading>
            <Text
              variant="review-paragraph"
              fontWeight="semibold"
              color={accentTextColor}
            >
              Creator, Chakra UI
            </Text>
          </Box>

          <Avatar
            size="lg"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
        </Flex>
      </CardHeader>

      <CardBody p={0} mt={10}>
        <Heading as="h3" variant="review-heading" mb={3}>
          {post.title}
        </Heading>

        <Text variant="review-paragraph">{post.body}</Text>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={10}>
          <GridItem>
            <Image
              boxSize="100px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
          </GridItem>
          <GridItem>
            <Image
              boxSize="100px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
          </GridItem>
          <GridItem>
            <Image
              boxSize="100px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />
          </GridItem>
        </Grid>
      </CardBody>

      <CardFooter justifyContent="flex-end">
        <Text
          display="flex"
          alignItems="center"
          variant="review-paragraph"
          fontSize={16}
          color={accentTextColor}
        >
          <Icon boxSize={7} as={IoCheckmarkSharp} />
          Joined 2 months ago
        </Text>
      </CardFooter>
    </Card>
  );
}
