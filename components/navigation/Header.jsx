import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRef } from 'react';
import IconHamburger from '../SVGs/IconHamburger';
import Logo from '../SVGs/Logo';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      as="header"
      position="absolute"
      top={10}
      px={10}
      zIndex={1401}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />

      <Box
        ref={btnRef}
        as={IconButton}
        icon={<IconHamburger isBurgerOpen={isOpen} />}
        background="none"
        _hover={{ background: 'none' }}
        _active={{ background: 'none' }}
        onClick={isOpen ? onClose : onOpen}
      ></Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: 'full', sm: 'sm' }}
        transition={{ duration: '5' }}
      >
        <DrawerOverlay />

        <DrawerContent
          alignItems="center"
          backgroundColor={useColorModeValue('white', 'raisin_black')}
        >
          <DrawerBody mt={120} display="flex" flexDirection="column" gap={5}>
            <Link as={NextLink} href="/" variant="menu-link">
              ABOUT US
            </Link>
            <Link as={NextLink} href="/" variant="menu-link">
              CONTENT CREATORS
            </Link>
            <Link as={NextLink} href="/business" variant="menu-link">
              LOCAL BUSINESSES
            </Link>
            <Link as={NextLink} href="/" variant="menu-link">
              ABOUT US
            </Link>

            <Button onClick={toggleColorMode} colorScheme="blackAlpha">
              Change to {colorMode === 'light' ? 'dark' : 'light'}
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
