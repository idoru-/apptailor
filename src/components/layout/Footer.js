import React from 'react'
import { Box, Button, Text, Anchor } from 'grommet'

export const Footer = ({ appName }) => (
  <Box
    tag='footer'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{
      left: 'medium',
      right: 'small',
      vertical: 'small',
    }}
    elevation='medium'
    style={{
      zIndex: '1',
    }}
  >
    <Box direction='row' align='center'>
      <Text
        size='small'
        margin={{
          right: 'small',
          vertical: 'none',
        }}
      >
        © {appName} 2019
      </Text>
    </Box>
    <Box direction='row' align='center'>
      <Anchor
        href='/signup'
        margin={{
          right: 'small',
        }}
      >
        Sign Up
      </Anchor>
      <Text>|</Text>
      <Anchor
        href='/signin'
        margin={{
          left: 'small',
        }}
      >
        Sign In
      </Anchor>
    </Box>
    <Button href='/support'>
      <Box
        flex={false}
        direction='row'
        align='center'
        margin={{
          left: 'small',
        }}
      >
        <Anchor
          level='4'
          margin={{
            right: 'small',
            vertical: 'none',
          }}
        >
          Support
        </Anchor>
      </Box>
    </Button>
  </Box>
)
