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
import { IoMoon, IoSunny } from 'react-icons/io5';
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
      <Link as={NextLink} href="/">
        <Logo />
      </Link>

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
          <DrawerBody
            mt={120}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={5}
          >
            <Link as={NextLink} href="/" variant="menu-link">
              Home
            </Link>
            <Link as={NextLink} href="/creator" variant="menu-link">
              Video creators
            </Link>
            <Link as={NextLink} href="/business" variant="menu-link">
              For businesses
            </Link>

            <Button
              onClick={toggleColorMode}
              variant="outline"
              border="none"
              outlineColor={useColorModeValue('black', 'white')}
              _hover={{
                backgroundColor: useColorModeValue(
                  'gray.200',
                  'blackAlpha.400'
                ),
              }}
              _active={{ backgroundColor: 'none' }}
              fontSize={18}
              mt={5}
              rightIcon={colorMode === 'light' ? <IoMoon /> : <IoSunny />}
            >
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
