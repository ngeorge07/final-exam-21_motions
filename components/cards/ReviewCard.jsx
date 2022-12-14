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
  Image,
  Text,
} from '@chakra-ui/react';

export default function ReviewCard({ post }) {
  return (
    <Card overflow="hidden" backgroundColor="black" px={10} py={4}>
      <CardHeader p={0}>
        <Flex>
          <Flex
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box>
              <Heading size={{ base: 'md', lg: 'lg' }}>Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>

            <Avatar
              size="lg"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody p={0}>
        <Heading as="h3" variant="review-heading">
          {post.title}
        </Heading>

        <Text>{post.body}</Text>
      </CardBody>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
        </GridItem>
        <GridItem>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
        </GridItem>
        <GridItem>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
        </GridItem>
      </Grid>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      ></CardFooter>
    </Card>
  );
}
