import React from 'react'
import { Anchor, Box, Heading } from 'grommet'
import { Basket as BasketIcon } from 'grommet-icons'

export const CartDisplay = () => (
  <Box direction='row-reverse' pad={{ horizontal: 'medium' }}>
    <Anchor
      icon={<BasketIcon size='medium' />}
      href='/cart'
      label={
        <Heading level='4' margin={{ horizontal: 'small' }}>
          My&nbsp;Cart&nbsp;(0)
        </Heading>
      }
    />
  </Box>
)
