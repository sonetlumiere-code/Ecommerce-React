import React from 'react';
import LogoComponent from './LogoComponent';
import { Link as RouteLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { 
  HamburgerIcon, 
  CloseIcon, 
  AddIcon 
} from '@chakra-ui/icons';

const Links = [
  {
    path: '/',
    name: 'Home'  
  },
  {
    path: '/products',
    name: 'Products'
  },
  {
    path: '/cart',
    name: 'Cart'
  }
];

const NavLinkComponent = ({ link }) => (
  <ChakraLink as={RouteLink} to={link.path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <Text fontSize='m'>{link.name}</Text>
  </ChakraLink>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>           
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Box>
                <LogoComponent/>
              </Box>
              {Links.map((link) => (
                <NavLinkComponent key={link.name} link={link}></NavLinkComponent>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <RouteLink to="/cart">
              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}>
                Carrito
              </Button>
            </RouteLink>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={3} onClick={isOpen ? onClose : onOpen}>
              {Links.map((link) => (
                <NavLinkComponent key={link.name} link={link}></NavLinkComponent>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}