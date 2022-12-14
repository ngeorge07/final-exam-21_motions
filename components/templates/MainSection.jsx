import { Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hidden: { y: 80, opacity: 0, scale: 0.9 },
};

export default function MainSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ rootMargin: '-60px 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Box
      as={motion.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      ml={{ base: 30 }}
      mr={{ base: 22 }}
      mx={{ sm: 70, md: 100, lg: 200 }}
      my={20}
    >
      {children}
    </Box>
  );
}
