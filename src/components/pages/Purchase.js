import React from 'react'

import { Box, Button, Heading } from 'grommet'

export const Purchase = props => {
  props.setHeader('Purchase')

  return (
    <Box fill align='center' justify='start' gap='medium' background='brand' border={{ color: 'brand', size: 'large' }}>
      <Button label='For Myself' href='/order/products' />
      <Button label='As a Gift' href='/order/products' />
    </Box>
  )
}
