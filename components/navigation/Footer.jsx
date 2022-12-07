import Link from 'next/link';

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from 'react-icons/io5';

import { HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const iconColor = useColorModeValue('#000', '#FFF');

  return (
    <footer>
      <Text fontSize="22px" align="center" mx={'56'} mt={'24'}>
        Not ready yet? Follow our journey on Social Media:
      </Text>

      <HStack justifyContent="center" gap={4} mt={3} mb={14}>
        <Link href="#">
          <Icon
            color={iconColor}
            _hover={{ color: '#4DB33B' }}
            boxSize={7}
            as={IoLogoLinkedin}
          />
        </Link>
        <Link href="#">
          <Icon
            color={iconColor}
            _hover={{ color: '#4DB33B' }}
            boxSize={7}
            as={IoLogoFacebook}
          />
        </Link>
        <Link href="#">
          <Icon
            color={iconColor}
            _hover={{ color: '#4DB33B' }}
            boxSize={7}
            as={IoLogoYoutube}
          />
        </Link>
        <Link href="#">
          <Icon
            color={iconColor}
            _hover={{ color: '#4DB33B' }}
            boxSize={7}
            as={IoLogoInstagram}
          />
        </Link>
        <Link href="#">
          <Icon
            color={iconColor}
            _hover={{ color: '#4DB33B' }}
            boxSize={7}
            as={IoLogoTiktok}
          />
        </Link>
      </HStack>
    </footer>
  );
}
