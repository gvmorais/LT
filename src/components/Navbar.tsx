'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const Navbar: React.FunctionComponent = () => {
  const [isSmallerThan48em] = useMediaQuery(['(min-width: 48em)'], {
    ssr: true,
    fallback: [false],
  });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex
      color="black"
      bgColor="white"
      width="100%"
      maxWidth="100%"
      position="fixed"
      top="0"
      alignItems="center"
      padding="1rem"
      justifyContent="space-between"
      h="88px"
      zIndex="20">
      <Link display="flex" alignItems="center" href="/">
        <Image src="lt_logo.jpg" height={['36px', '48px', '56px']} alt="lt_logo.jpg" />
        <Text
          fontSize={['18px', '20px', '24px']}
          paddingLeft="12px"
          fontWeight="bold">
          Luz&Tuna
        </Text>
      </Link>
      {isSmallerThan48em && (
        <Flex
          minWidth={['100%', '100%', '400px']}
          justifyContent={['center', 'space-evenly']}
          fontWeight="700">
          <Link href="/">
            <Text margin={['0', '0', '0 5px']}>Página Inicial</Text>
          </Link>
          {/* <Link href="/galeria">
            <Text margin={['0', '0', '0 10px']}>Galeria</Text>
          </Link> */}
          <Link href="/palmares">
            <Text margin={['0', '0', '0 10px']}>Palmarés</Text>
          </Link>
          <Link href="/membros">
            <Text margin={['0', '0', '0 10px']}>Membros</Text>
          </Link>
          <Link href="/contactos">
            <Text margin={['0', '0', '0 10px']}>Contactos</Text>
          </Link>
        </Flex>
      )}
      {!isSmallerThan48em && (
        <>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            background="white"
            _hover={{ background: 'white' }}
            onClick={() => setMenuOpen(true)}
          >
            <HamburgerIcon />
          </IconButton>
          {menuOpen && (
            <Box
              w="100vw"
              h="100vh"
              zIndex="1000"
              background="white"
              position="fixed"
              top="0"
              right="0"
              transition="all 0.3s ease-in-out"
              transform={menuOpen ? 'translateX(0)' : 'translateX(100%)'}
            >
              <Flex direction="column" align="center" justify="center" h="100%">
                <IconButton
                  aria-label="Close Menu"
                  size="lg"
                  mr={2}
                  background="white"
                  _hover={{ background: 'white' }}
                  onClick={() => setMenuOpen(false)}
                  position="fixed"
                  right="4"
                  top="4"
                >
                  <IoClose />
                </IconButton>
              <Flex
                justifyContent="flex-start"
                align="center"
                fontWeight="700"
                direction="column"
                w="100%">
                <Link
                  display="flex"
                  alignItems="center"
                  href="/"
                  flexDirection="column">
                  <Image src="lt_logo.jpg" height="280px" alt="lt_logo.jpg" />
                  <Text fontSize="30px" mb="2rem" fontWeight="bold">
                    Luz&Tuna
                  </Text>
                </Link>
                <Link href="/">
                  <Text>Página Inicial</Text>
                </Link>
                <Link href="/galeria">
                  <Text>Galeria</Text>
                </Link>
                <Link href="/palmares">
                  <Text>Palmarés</Text>
                </Link>
                <Link href="/membros">
                  <Text>Membros</Text>
                </Link>
                <Link href="/contactos">
                  <Text>Contactos</Text>
                </Link>
              </Flex>
            </Flex>
          </Box>
          )}
        </>
      )}
    </Flex>
  );
};

export default Navbar;
