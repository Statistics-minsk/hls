import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export const CornflowersBg: React.FC = () => (
  <>
    <Box
      position="absolute"
      left="-250px"
      top="0px"
      opacity={0.2}
      zIndex={0}
      pointerEvents="none"
      transform="rotate(90deg)"
    >
      <Image
        src="img/vasilek-3.png"
        alt=""
        w="230%"
        h="auto"
        filter="brightness(1.1) drop-shadow(0 2px 4px rgba(74, 111, 255, 0.1))"
      />
    </Box>
    <Box
      position="absolute"
      right="-200px"
      top="50%"
      opacity={0.4}
      zIndex={0}
      pointerEvents="none"
      transform="rotate(-90deg)"
    >
      <Image
        src="img/vasilek-3.png"
        alt=""
        w="370%"
        h="auto"
        filter="brightness(1.1) drop-shadow(0 2px 4px rgba(74, 111, 255, 0.1))"
      />
    </Box>
  </>
);