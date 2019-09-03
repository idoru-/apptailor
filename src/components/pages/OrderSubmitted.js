import React from 'react'

import { Box, Button, Heading, Text } from 'grommet'

export const OrderSubmitted = () => (
  <Box fill align='center' justify='start' background='brand'>
    <Heading>OrderSubmitted</Heading>
    <Text>Thank You!</Text>
    <Button label='Back to Main Menu' href='/' margin='large' />
  </Box>
)
