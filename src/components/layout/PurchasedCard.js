import React, { Component } from 'react'

import { Anchor, Box, Button, Paragraph, Text, Heading } from 'grommet'

export default class PurchasedCard extends Component {
  render() {
    const { date, items, totalPrice, status, id } = this.props

    return (
      <Box width='medium' margin={{ bottom: 'medium' }} flex='grow' background='dark-1' key={id}>
        <Box pad='medium'>
          <Heading level='3' margin='none'>
            {date}
          </Heading>
          <ol>
            {(items || []).map(item => (
              <li>
                <Heading level='4' margin={{ bottom: 'small' }}>
                  <Anchor href='#' color='accent-1'>
                    {item.name}
                  </Anchor>{' '}
                </Heading>
                <Box direction='row' gap='medium'>
                  <Text size='small'>Date: {item.date}</Text>
                  <Text size='small'>Time: {item.time}</Text>
                </Box>
              </li>
            ))}
          </ol>
          <Box direction='row' justify='between'>
            <Paragraph>
              <Text size='small'>Total:</Text> {totalPrice}
            </Paragraph>
            <Paragraph>Status: {status}</Paragraph>
          </Box>
          <Box direction='row' justify='between'>
            <Button color='accent-2' margin={{ horizontal: 'auto' }}>
              <Heading level='3' margin={{ vertical: 'none' }}>
                <strong>ADD TO CART</strong>
              </Heading>
            </Button>
            <Button color='accent-2' margin={{ horizontal: 'auto' }} href='/purchases/details'>
              <Heading level='3' margin={{ vertical: 'none' }}>
                <strong>DETAILS</strong>
              </Heading>
            </Button>
          </Box>
        </Box>
      </Box>
    )
  }
}
