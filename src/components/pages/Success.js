import React from 'react'

import { Box, Button, Heading, Text } from 'grommet'

export const Success = () => (
  <Box fill align='center' justify='center'>
    <Heading margin='none'>Congratulations,</Heading>
    <Heading margin='none'>Username!</Heading>
    <Text margin='large'>Your Account was successfully created!</Text>
    <Button label='Main Menu' href='/' margin='small' />
  </Box>
)
