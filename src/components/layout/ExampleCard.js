import React, { Component } from 'react'

import { Box, Image, Heading, Text } from 'grommet'

export default class ExampleCard extends Component {
  render() {
    const { image, title, id } = this.props

    return (
      <Box background='dark-1' key={id}>
        <Box height='xsmall'>
          <Image src={image} fit='cover' />
        </Box>

        <Text size='small' weight='bold' margin={'xsmall'}>
          {title}
        </Text>
      </Box>
    )
  }
}
