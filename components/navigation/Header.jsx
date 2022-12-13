import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
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

        <DrawerContent alignItems="center">
          <DrawerBody mt={120}>
            <Text>ABOUT US</Text>
            <Text>CONTENT CREATORS</Text>
            <Text>LOCAL BUSINESSES</Text>
            <Text>CONTACT</Text>

            <Button onClick={toggleColorMode} colorScheme="blackAlpha">
              Change to {colorMode === 'light' ? 'dark' : 'light'}
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
