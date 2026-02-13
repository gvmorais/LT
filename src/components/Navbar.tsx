'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Flex,
  IconButton,
  Image,
  Link,
  Slide,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const Navbar: React.FunctionComponent = () => {
  const [isSmallerThan48em] = useMediaQuery('(min-width: 48em)', {
    ssr: true,
    fallback: false,
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
        <Image src="lt_logo.jpg" height={['36px', '48px', '56px']} />
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
          <Link href="/galeria">
            <Text margin={['0', '0', '0 10px']}>Galeria</Text>
          </Link>
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
            icon={<HamburgerIcon />}
            background="white"
            _hover={{ background: 'white' }}
            onClick={() => setMenuOpen(true)}
          />
          <Slide in={menuOpen} unmountOnExit>
            <Flex
              w="100vw"
              h="100vh"
              zIndex="1000"
              background="white"
              position="fixed"
              top="0"
              right="0">
              <IconButton
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={<IoClose />}
                background="white"
                _hover={{ background: 'white' }}
                onClick={() => setMenuOpen(false)}
                position="fixed"
                right="0"
              />
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
                  <Image src="lt_logo.jpg" height="280px" />
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
          </Slide>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
