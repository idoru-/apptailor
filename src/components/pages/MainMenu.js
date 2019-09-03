import React from 'react'

import { Box, Button, Heading } from 'grommet'

export const MainMenu = () => (
  <Box fill align='center' justify='start' gap='medium' background='brand' border={{ color: 'brand', size: 'large' }}>
    <Heading>Main Menu</Heading>
    <Button label='Purchase' href='/purchase' />
    <Button label='My Purchases' href='/purchases' />
    <Button label='Settings' href='/settings' />
  </Box>
)
