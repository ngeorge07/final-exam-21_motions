import {
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useState } from 'react';
import IconHamburger from '../SVGs/IconHamburger';

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <Flex
      as="header"
      position="absolute"
      top={10}
      px={10}
      zIndex={1}
      w="100%"
      justifyContent="space-between"
    >
      <Heading as="h2" size="lg" color="white">
        21 MOTIONS LOGO
      </Heading>

      <Menu placement="bottom">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<IconHamburger isBurgerOpen={isBurgerOpen} />}
          background="none"
          _hover={{
            background: 'none',
          }}
          _active={{
            background: 'none',
          }}
          onClick={() => setIsBurgerOpen((prev) => !prev)}
        ></MenuButton>

        <MenuList>
          <MenuItem>ABOUT US</MenuItem>
          <MenuItem>CONTENT CREATORS</MenuItem>
          <MenuItem>LOCAL BUSINESSES</MenuItem>
          <MenuItem>CONTACT</MenuItem>
        </MenuList>
      </Menu>

      <Button colorScheme="blackAlpha">Change the mood</Button>
    </Flex>
  );
}
