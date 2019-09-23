import React from 'react'
import { Box, Heading } from 'grommet'
import { CartDisplay } from '../layout/CartDisplay'

export const HeaderTitleCart = ({ header }) => (
  <Box background='brand'>
    <CartDisplay />
    <Box pad={{ horizontal: 'medium' }} align='center'>
      <Heading margin={{ top: 'none', bottom: 'medium' }}>{header}</Heading>
    </Box>
  </Box>
)
