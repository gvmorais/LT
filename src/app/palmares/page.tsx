'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Palmares: React.FunctionComponent = () => {
  const [numPremios, setNumPremios] = useState(0);
  const [numSalas, setNumSalas] = useState(0);
  const [numFestivais, setNumFestivais] = useState(0);
  const [numActuacoes, setNumActuacoes] = useState(0);

  const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  useEffect(() => {
    let startTimestamp: number;
    const updateCount = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const elapsedMilliseconds = timestamp - startTimestamp;
      const progress = elapsedMilliseconds / 2500;

      if (progress < 1) {
        setNumPremios(Math.floor(300 * easeInOut(progress)));
        setNumSalas(Math.floor(30 * easeInOut(progress)));
        setNumFestivais(Math.floor(150 * easeInOut(progress)));
        setNumActuacoes(Math.floor(500 * easeInOut(progress)));
        requestAnimationFrame(updateCount);
      } else {
        setNumPremios(300);
        setNumSalas(30);
        setNumFestivais(150);
        setNumActuacoes(500);
      }
    };

    requestAnimationFrame(updateCount);
  }, []);

  return (
    <>
      <Box
        mt="88px"
        height={['20vh', '30vh', '40vh', '50vh', '60vh']}
        width="100%"
        overflow="hidden">
        <Image
          src="LT_Premio.jpg"
          objectPosition={[
            '22px -34px',
            '27px -61px',
            '70px -97px',
            '70px -135px',
            '70px -225px',
          ]}
          objectFit="cover"
          width="100%"
          transform="scale(120%)"
        />
      </Box>
      <Flex
        w="100vw"
        align="center"
        justifyContent="center"
        textAlign="center"
        direction={['column', 'column', 'row', 'row', 'row']}
        my={['2rem', '2rem', '6rem', '6rem', '6rem']}>
        <Flex
          minW={['90%', '90%', '20%', '20%', '20%']}
          backgroundColor="#5A5A5A"
          justifyContent="center"
          align="center"
          p="1rem"
          flexDirection="column"
          borderBottom={['1px solid black', '1px solid black', '', '', '']}
          borderRight={['', '', '1px solid black', '1px solid black', '']}>
          <Text fontSize="20px">Salas de espectáculo</Text>
          <Text fontSize="35px">
            {numSalas}
            {numSalas === 30 && '+'}
          </Text>
        </Flex>
        <Flex
          minW={['90%', '90%', '20%', '20%', '20%']}
          backgroundColor="#5A5A5A"
          justifyContent="center"
          align="center"
          py="1rem"
          flexDirection="column"
          borderBottom={['1px solid black', '1px solid black', '', '', '']}
          borderRight={['', '', '1px solid black', '1px solid black', '']}>
          <Text fontSize="20px">Festivais</Text>
          <Text fontSize="35px">
            {numFestivais}
            {numFestivais === 150 && '+'}
          </Text>
        </Flex>
        <Flex
          minW={['90%', '90%', '20%', '20%', '20%']}
          backgroundColor="#5A5A5A"
          justifyContent="center"
          align="center"
          py="1rem"
          flexDirection="column"
          borderBottom={['1px solid black', '1px solid black', '', '', '']}
          borderRight={['', '', '1px solid black', '1px solid black', '']}>
          <Text fontSize="20px">Actuações</Text>
          <Text fontSize="35px">
            {numActuacoes}
            {numActuacoes === 500 && '+'}
          </Text>
        </Flex>
        <Flex
          minW={['90%', '90%', '20%', '20%', '20%']}
          backgroundColor="#5A5A5A"
          justifyContent="center"
          align="center"
          py="16.5px"
          flexDirection="column">
          <Text fontSize="20px">Prémios</Text>
          <Text fontSize="35px">
            {numPremios}
            {numPremios === 300 && '+'}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Palmares;
