import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReviewCard from './cards/ReviewCard';
import ChakraCarousel from './ChakraCarousel';

export default function CarouselContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=15')
      .then((res) => res.json())
      .then((res) => setData(res.posts));
  }, []);

  return (
    <Container
      py={8}
      px={0}
      maxW={{
        base: '100%',
        sm: '35rem',
        md: '43.75rem',
        lg: '57.5rem',
      }}
    >
      <ChakraCarousel gap={32}>
        {data.map((post, index) => (
          <ReviewCard key={index} post={post} />
        ))}
      </ChakraCarousel>
    </Container>
  );
}
