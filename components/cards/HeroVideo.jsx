import { AspectRatio } from '@chakra-ui/react';
import { hero_video } from '../../styles/Hero.module.scss';
import PropositionCard from './PropositionCard';

export default function HeroVideo() {
  return (
    <AspectRatio
      _before={{ content: 'none' }}
      w="100%"
      h={{ base: '70vh', sm: '100vh' }}
      ratio={16 / 9}
    >
      <>
        <PropositionCard
          isHome={true}
          linkText="For businesses"
          text="ROOTED IN CREATIVITY. CONNECTED BY GROWTH"
        />
        <video className={hero_video} autoPlay muted loop>
          <source src="/home/21motions-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </>
    </AspectRatio>
  );
}
