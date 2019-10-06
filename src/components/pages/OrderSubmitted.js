import React from 'react'

import { Box, Button, Text } from 'grommet'

export const OrderSubmitted = props => {
  props.setHeader('Order Submitted')

  return (
    <Box fill align='center' justify='start' background='brand'>
      <Text>Thank You!</Text>
      <Button label='Back to Main Menu' href='/' margin='medium' />
      <Button label='View Order Summary' href='/order/summary' margin='small' />
      <Button label='Add to Calendar' href='#' margin='small' />
    </Box>
  )
}
