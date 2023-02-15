import React from 'react'
import { Box } from '@chakra-ui/react';

export const Language = ({color,logo}) => {
  return (
    <Box color={color}>
        {
            logo
        }
    </Box>

  )
}
