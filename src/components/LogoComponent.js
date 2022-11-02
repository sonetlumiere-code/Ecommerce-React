import React from 'react'
import { Box, Image } from '@chakra-ui/react';
const imgLogo = require('../assets/imgs/rayo.png');

const LogoComponent = () => {
  return (
    <Box>
      <Image boxSize="45px" src={imgLogo} alt='Logo' />
    </Box>
  )
}

export default LogoComponent