import React from 'react'

import { Box, Button } from 'grommet'

export const MainMenu = props => {
  props.setHeader('Main Menu')

  return (
    <Box fill align='center' justify='start' gap='medium' background='brand' border={{ color: 'brand', size: 'large' }}>
      <Button label='Purchase' href='/purchase' />
      <Button label='My Purchases' href='/purchases' />
      <Button label='About Company' href='/about' />
      <Button label='Settings' href='/settings' />
    </Box>
  )
}
