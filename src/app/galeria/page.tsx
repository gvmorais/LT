import { Flex } from '@chakra-ui/react';
import Gallery from '../../components/Gallery';

const Galeria: React.FunctionComponent = () => {
  return (
    <Flex
      width="100vw"
      overflow="hidden"
      color="black"
      align="center"
      justifyContent="center"
      flexDirection="column"
      mb="2rem">
      <Gallery />
    </Flex>
  );
};

export default Galeria;
