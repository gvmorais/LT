import { Flex, Image } from '@chakra-ui/react';

const Sli: React.FunctionComponent = () => {
  return (
    <Flex
      width="100vw"
      overflow="hidden"
      color="black"
      align="center"
      justifyContent="center"
      flexDirection="column"
      mb="2rem"
      mt="88px">
      <Image
        src="sli.jpg"
        w={['200px', '250px', '300px', '350px', '400px']}
        py="1rem"
        zIndex="1"
      />
    </Flex>
  );
};

export default Sli;
