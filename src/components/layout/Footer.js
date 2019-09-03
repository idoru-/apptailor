import React from 'react'
import { Box, Button, Heading, Anchor } from 'grommet'

export const Footer = ({ appName }) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
  >
    <Box direction='row' align='center'>
      <Heading level='4' margin={{ right: 'small', vertical: 'none' }}>
        {appName} © 2019
      </Heading>
    </Box>
    <Button href='/support'>
      <Box flex={false} direction='row' align='center' margin={{ left: 'small' }}>
        <Anchor level='4' margin={{ right: 'small', vertical: 'none' }}>
          Support
        </Anchor>
      </Box>
    </Button>
  </Box>
)
