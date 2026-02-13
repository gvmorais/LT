'use client';

import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

const Home: React.FunctionComponent = () => {
  const [isSmallerThan62em] = useMediaQuery('(min-width: 62em)', {
    ssr: true,
    fallback: false,
  });
  return (
    <>
      <Box
        height={['20vh', '30vh', '40vh', '50vh', '60vh']}
        w="100vw"
        backgroundColor="black"
        overflow="hidden"
        mt="88px">
        <Image
          src="LuzandTuna__Teaser.gif"
          w="100%"
          h="100%"
          objectFit={['cover', 'cover']}
        />
      </Box>
      <Flex
        w="100vw"
        alignItems="center"
        py="3rem"
        direction="column"
        color="black"
        lineHeight="1.75"
        position="relative">
        {isSmallerThan62em && (
          <Image
            src="lt_logo.jpg"
            w={['200px', '250px', '300px', '350px', '400px']}
            pb="1rem"
            zIndex="1"
          />
        )}
        <Flex
          direction={['column', 'column', 'column', 'row', 'row']}
          px={['2rem', '4rem']}
          w="100%"
          align="center">
          <Box h="640px">
            <Image
              w="100%"
              h="100%"
              src="lt_figueira.png"
              objectFit="cover"
              objectPosition="60% 50%"
            />
          </Box>
          {!isSmallerThan62em && (
            <Image
              src="lt_logo.jpg"
              w={['200px', '250px', '300px', '350px', '400px']}
              py="1rem"
              zIndex="1"
            />
          )}
          <Flex
            direction="column"
            alignItems="center"
            textAlign={['left', 'justify', 'justify', 'justify', 'justify']}
            my={['2rem', '2rem', '', '', '']}>
            <Text w={['95%', '95%', '95%', '60%', '60%']} py="7.5px">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Luz&Tuna - Tuna da
              Universidade Lusíada de Lisboa, foi fundada a 24 de Novembro de
              1994.
            </Text>
            <Text w={['95%', '95%', '95%', '60%', '60%']} py="7.5px">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Surge nos &quot;Jardins
              da Universidade&quot; e é constituída em exclusividade por alunos
              e antigos alunos da nossa Universidade, no entanto, nunca deixou
              de distinguir como Tunos Honorários, todos aqueles que com
              reconhecidos méritos souberam dignificar a Lusíada através da
              sua/nossa Tuna.
            </Text>
            <Text w={['95%', '95%', '95%', '60%', '60%']} py="7.5px">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Luz&Tuna nasceu para
              fazer serenatas, para encantar e para actuar pelas academias de
              todo o pais em representação da Universidade Lusíada de Lisboa.
              Entre as demais iniciativas onde tem participado, sejam estas
              culturais, académicas ou de beneficência, destacam-se,
              naturalmente, os &quot;Festivais de Tunas&quot; sempre ganhando
              prémios, mas fundamentalmente, deixando saudades, tanto em
              Portugal como em Espanha, França e nas Américas, onde ao longo dos
              anos têm encantado e representando com dignidade o fenómeno
              tuneril.
            </Text>
            <Text w={['95%', '95%', '95%', '60%', '60%']} py="7.5px">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na selecção do seu
              repertório tem havido uma preocupação em trilhar um percurso pelas
              diversas matrizes da música portuguesa, privilegiando-se os temas
              dos grandes nomes da guitarra e do fado de Lisboa, sem esquecer,
              os seus próprios originais. Uma variedade e uma riqueza cultural
              ao nível musical, que tem bases nas mais diversas raízes da música
              mundial, distinguem a Luz&Tuna pela sua postura, desempenho e
              dedicação, sem nunca esquecer a sua essência académica.
            </Text>
            <Text w={['95%', '95%', '95%', '60%', '60%']} py="7.5px">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assim, a Luz&Tuna é…
              &quot;a memória de sons conflituantes de uma Juventude que procura
              conjugar o rigor de execução com alguns suaves devaneios e desvios
              que são o tempero de toda a arte, o sal e o sentido da vida. Um
              pequeno sopro (re)criador sobre tantas e tão belas músicas de
              sempre&quot;.
            </Text>
            <Text textAlign="center" w="100%" py="7.5px">
              SOL LUCET TUNAE
            </Text>
          </Flex>
          <Box h="640px">
            <Image
              w="100%"
              h="100%"
              src="Lt_postura.jpg"
              objectFit="cover"
              objectPosition="60% 55%"
            />
          </Box>
        </Flex>
        {/* <Flex
          justifyContent="center"
          align="center"
          flexDirection="column"
          margin="0 8rem">
          <Box>TUNOS</Box>
          Aderente Adónis Africander Amiba Apache Arquiteto Atleta Bico Bilé
          Bolha Bruno Alves Calado Carapinha Caroço Castratti Catraia Charlão
          Chiclete Codeas Cristina Caras Lindas Dalai D&aposArtagnan Eco El
          Marranero Enrabadão Escafiado Estevão Fausto Felps Fernandinho Filho
          de Maput Fivel Francisco Matos Gipa Gordini Granada Hassan Heavy Jonas
          Lameiras Lopes de Almeida Manozarra Martins Medeiros Megazord Meias
          Mokambo Mónica Mosca Mr. Bean Naveia Negativo Nelson Nozes O&aposNeill
          Pacma Palmelão Pastel Patilhas Peixinho Pepe Pepe Dux Peter Pan
          Pintelho Pipinho Pipoca Pistolas Piu-Piu Poly Pombo Preto PrimaDonna
          Psicopata Queixadas Roberto Rocky Rodas Rottweiler Sandocha Silêncio
          Slimani Sodré Sousa Splinter T22 Tedy Teves Tó Zé Tomate Travolta
          Tripas Tuto Vinagre Xaps Xica Zé Bubau Zé de Maria Zé João CALOIROS
          Birotti Jibóia Musgueira Salame Vidrão
        </Flex> */}
      </Flex>
    </>
  );
};

export default Home;
