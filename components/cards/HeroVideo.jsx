import { AspectRatio } from '@chakra-ui/react';
import PropositionCard from './PropositionCard';

export default function HeroVideo() {
  return (
    <AspectRatio _before={{ content: 'none' }} w="100%" h="100%" ratio={16 / 9}>
      <>
        <PropositionCard />
        <video
          style={{
            position: 'relative',
            height: '100vh',
            width: '100vw',
            // opacity: '70%',
          }}
          autoPlay
          muted
          loop
        >
          <source src="/home/21motions-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </>
    </AspectRatio>
  );
}
