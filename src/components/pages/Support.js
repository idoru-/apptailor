import React from 'react'

import { Box, Button, Heading } from 'grommet'

export const Support = () => (
  <Box fill align='center' justify='start' gap='medium'>
    <Heading>Support</Heading>
    <Button label='Salon Support' href='/support/client' />
    <Button label='App Support' href='/support/app' />
  </Box>
)
