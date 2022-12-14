import { Flex } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TeamMember from './TeamMember';

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, staggerChildren: 0.3, delayChildren: 0.2 },
  },
  hidden: { opacity: 0, scale: 0.9 },
};

export default function TeamWrapper() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ rootMargin: '-30px 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Flex
      as={motion.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      mt={{ base: 16, md: 20 }}
      gap={{ base: 10, md: 5 }}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: 'column', md: 'row' }}
      maxW={{ md: '600px' }}
      mx={{ md: 'auto' }}
    >
      <TeamMember name="ERZSÉBET BÁLINT" title="UX & Content" />
      <TeamMember name="GEORGE NICOLAE" title="Frontend Developer" />
      <TeamMember name="JENS STANEK" title="Super Coach" />
    </Flex>
  );
}
