import React, { Component } from 'react'

import { Box, Button, Image, Heading, Text, Anchor } from 'grommet'

export default class ProCard extends Component {
  render() {
    const { image, name, title, id } = this.props

    return (
      <Box flex={false} background='dark-1' key={id}>
        <Box height='medium' width='medium'>
          <Image src={image} fit='cover' />
          <Box pad='medium'>
            <Anchor>
              <Heading level='3' margin={'none'}>
                {name}
              </Heading>
            </Anchor>
            <Text level='5' margin={'none'}>
              {title}
            </Text>
            <Button fill='horizontal' color='accent-2' alignSelf='end'>
              <Heading margin={{ bottom: 'none' }}>
                <strong>SELECT</strong>
              </Heading>
            </Button>
          </Box>
        </Box>
      </Box>
    )
  }
}
