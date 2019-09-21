import React from 'react'

import { Box, Heading } from 'grommet'

export const MyPurchases = props => {
  props.setHeader('My Purchases')

  return (
    <Box fill align='center' justify='center'>
      <Heading>MyPurchases</Heading>
    </Box>
  )
}
