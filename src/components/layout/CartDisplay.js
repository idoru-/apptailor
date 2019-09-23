import React from 'react'
import { Anchor, Box, Heading } from 'grommet'
import { Basket as BasketIcon } from 'grommet-icons'

export const CartDisplay = () => (
  <Box direction='row-reverse' pad={{ horizontal: 'medium' }}>
    <Anchor
      icon={<BasketIcon size='medium' />}
      label={
        <Heading level='4' href='/cart' margin={{ horizontal: 'small' }}>
          My&nbsp;Cart&nbsp;(0)
        </Heading>
      }
    />
  </Box>
)
