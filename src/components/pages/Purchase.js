import React from 'react'

import { Box, Button, Heading } from 'grommet'

export const Purchase = () => (
  <Box fill align='center' justify='start' gap='medium' background='brand' border={{ color: 'brand', size: 'large' }}>
    <Heading>Purchase</Heading>
    <Button label='For Myself' href='/products' />
    <Button label='As a Gift' href='/products' />
  </Box>
)
