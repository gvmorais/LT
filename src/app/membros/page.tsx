import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';

const Membros: React.FunctionComponent = () => {
  const membros = {
    tunos: [
      'Aderente',
      'Adónis',
      'Africander',
      'Amiba',
      'Apache',
      'Arquiteto',
      'Atleta',
      'Bico',
      'Bilé',
      'Bolha',
      'Bruno Alves',
      'Calado',
      'Carapinha',
      'Caroço',
      'Castratti',
      'Catraia',
      'Charlão',
      'Chiclete',
      'Codeas',
      'Cristina Caras Lindas',
      'Dalai',
      "D'Artagnan",
      'Eco',
      'El Marranero',
      'Enrabadão',
      'Escafiado',
      'Estevão',
      'Fausto',
      'Felps',
      'Fernandinho',
      'Filho de Maput',
      'Fivel',
      'Francisco Matos',
      'Gipa',
      'Gordini',
      'Granada',
      'Hassan',
      'Heavy',
      'Jibóia',
      'Jonas',
      'Lameiras',
      'Lopes de Almeida',
      'Martins',
      'Medeiros',
      'Megazord',
      'Meias',
      'Mokambo',
      'Mónica',
      'Mosca',
      'Mr. Bean',
      'NaVeia',
      'Negativo',
      'Nelson',
      'Nozes',
      "O'Neill",
      'Pacma',
      'Palmelão',
      'Pastel',
      'Patilhas',
      'Peixinho',
      'Paizarra',
      'Pepe',
      'Pepe Dux',
      'Peter Pan',
      'Pintelho',
      'Pipinho',
      'Pipoca',
      'Pistolas',
      'Poly',
      'Pombo',
      'Preto',
      'PrimaDonna',
      'Psicopata',
      'Queixadas',
      'Roberto',
      'Rocky',
      'Rodas',
      'Rogério',
      'Rottweiler',
      'Sandocha',
      'Silêncio',
      'Slimani',
      'Sodré',
      'Sousa',
      'Splinter',
      'T22',
      'Tedy',
      'Teves',
      'Tó Zé',
      'Tomate',
      'Travolta',
      'Tuto',
      'Vinagre',
      'Xaps',
      'Xica',
      'Zarra',
      'Zé Bubau',
      'Zé de Maria',
      'Zé João',
    ],
    caloiros: ['Bastardo', 'Chatiago', 'DVD', 'É de Xira', 'Estrela', 'GB', 'Jovem', 'Musgueira', 'Salame', 'Samsonite', 'Serra', 'Vidrão'],
  };
  return (
    <>
      <Box
        mt="88px"
        height={['20vh', '30vh', '40vh', '50vh', '60vh']}
        width="100%"
        overflow="hidden">
        <Image
          src="Lt_foto.jpg"
          objectPosition={[
            '0 -34px',
            '0 -61px',
            '0 -97px',
            '0 -135px',
            '0 -225px',
          ]}
          objectFit="cover"
          width="100%"
          transform="scale(100%)"
        />
      </Box>
      <Flex
        w="100vw"
        align="center"
        justify="center"
        color="black"
        direction="column"
        mt="1rem">
        <Text fontSize="30px" mb="1rem">
          Tunos
        </Text>
        <Grid
          mb="2rem"
          gridTemplateColumns={[
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(6, 1fr)',
            'repeat(7, 1fr)',
          ]}
          gridTemplateRows={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
          ]}
          gridColumnGap={['2px', '4px', '4px', '4px', '4px', '4px']}
          gridRowGap={['2px', '4px', '4px', '4px', '4px', '4px']}>
          {membros.tunos.map((item, index) => (
            <GridItem key={index} mr="1rem">
              <Text>{item}</Text>
            </GridItem>
          ))}
        </Grid>

        <Text fontSize="30px" mb="1rem">
          Caloiros
        </Text>
        <Grid
          mb="2rem"
          gridTemplateColumns={[
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(6, 1fr)',
            'repeat(9, 1fr)',
            'repeat(12, 1fr)',
          ]}
          gridTemplateRows={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
          ]}
          gridColumnGap={['2px', '4px', '4px', '4px', '4px', '4px']}
          gridRowGap={['2px', '4px', '4px', '4px', '4px', '4px']}>
          {membros.caloiros.map((item, index) => (
            <GridItem key={index} mr="1rem">
              <Text>{item}</Text>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Membros;
