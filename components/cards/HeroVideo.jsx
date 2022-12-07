import { AspectRatio } from '@chakra-ui/react';

export default function HeroVideo() {
  return (
    <AspectRatio _before={{ content: 'none' }} w="100%" h="100%" ratio={16 / 9}>
      <video
        style={{ position: 'relative', height: '100vh', width: '100vw' }}
        autoPlay
        muted
        loop
      >
        <source src="/home/21motions-promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </AspectRatio>
  );
}
