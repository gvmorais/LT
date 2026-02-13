import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Contactos: React.FunctionComponent = () => {
  return (
    <>
      <Box
        mt="88px"
        height={['20vh', '30vh', '40vh', '50vh', '60vh']}
        width="100%"
        overflow="hidden">
        <Image src="lusiada.png" objectFit="cover" width="100%" />
      </Box>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        my={['2rem', '2rem', '4rem', '4rem', '4rem']}>
        <Text color="black" fontWeight="bold">
          Tomás &quot;Slimani&quot; Silva, Magister Tunae:
        </Text>
        <Text color="black">968 742 583</Text>
        <Text color="black">luz.tuna@gmail.com</Text>
        <Flex
          width={['70%', '50%', '50%', '50%', '25%']}
          align="center"
          justify="space-between"
          mt="2rem">
          <Image
            src="qrcodewhatsapp.png"
            objectFit="cover"
            width={['100px', '150px', '150px', '200px', '200px']}
          />
          <Text color="black" fontWeight="bold">
            Junta-te a nós!
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Contactos;
