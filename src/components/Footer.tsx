'use client';

import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillSpotify,
} from 'react-icons/ai';

const Footer: React.FunctionComponent = () => {
  return (
    <Flex
      position="relative"
      backgroundColor="white"
      justifyContent="center"
      w="100vw"
      bottom="0"
      flexDirection="column"
      align="center">
      <Flex
        h="50px"
        w={['90vw', '90vw', '30vw', '30vw', '30vw']}
        background="linear-gradient(33deg, #032662 20%, #ffd016 100%)"
        align="center"
        justifyContent="space-evenly"
        mb="1rem"
        borderRadius="35px">
        <Link
          href="https://www.instagram.com/luz.tuna/"
          isExternal
          w={['30px', '30px', '30px', '40px', '40px']}
          h={['30px', '30px', '30px', '40px', '40px']}>
          <Icon as={AiFillInstagram} color="white" w="100%" h="100%" />
        </Link>
        <Link
          href="https://www.facebook.com/LUZTUNAE"
          isExternal
          w={['30px', '30px', '30px', '40px', '40px']}
          h={['30px', '30px', '30px', '40px', '40px']}>
          <Icon as={AiFillFacebook} color="white" w="100%" h="100%" />
        </Link>
        <Link
          href="https://www.youtube.com/@LUZTUNA"
          isExternal
          w={['30px', '30px', '30px', '40px', '40px']}
          h={['30px', '30px', '30px', '40px', '40px']}>
          <Icon as={AiFillYoutube} color="white" w="100%" h="100%" />
        </Link>
        <Link
          href="https://open.spotify.com/artist/7nndznNEx5Zt9nnBoIs8FP"
          isExternal
          w={['30px', '30px', '30px', '40px', '40px']}
          h={['30px', '30px', '30px', '40px', '40px']}>
          <Icon as={AiFillSpotify} color="white" w="100%" h="100%" />
        </Link>
      </Flex>
      <Text
        color="black"
        fontSize="7pt"
        paddingBottom="1rem"
        textAlign="center">
        Luz&Tuna - Tuna da Universidade Lusíada de Lisboa - EST. 1994 - SOL
        LUCET TUNAE
      </Text>
    </Flex>
  );
};

export default Footer;
