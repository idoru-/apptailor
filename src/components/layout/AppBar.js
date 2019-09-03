import React from 'react'
import { Anchor, Box, Heading } from 'grommet'
import { Disc as AppIcon } from 'grommet-icons'
import { Money as PoinsIcon } from 'grommet-icons'

export const AppBar = ({ appName }) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='accent-3'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
  >
    <Anchor
      href='/'
      icon={<AppIcon color='brand' size='large' />}
      label={
        <Heading level='3' margin={{ left: 'small', top: 'medium' }}>
          {appName}
        </Heading>
      }
    />

    <Anchor href='/reward' icon={<PoinsIcon color='brand' size='medium' />} label='Reward: 2560 points' />
  </Box>
)
