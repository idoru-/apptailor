import React, { Component } from 'react'

import { Anchor, Box, Button, Paragraph, Text, Heading } from 'grommet'

export default class ComboCard extends Component {
  render() {
    const { name, items, price, description, id } = this.props

    return (
      <Box width='medium' margin={{ bottom: 'medium' }} flex='grow' background='dark-1' key={id}>
        <Box pad='small'>
          <Heading level='3' margin='none'>
            {name}
          </Heading>

          {(items || []).map(item => (
            <>
              <Heading level='4' margin='none'>
                <Anchor href='#' color='accent-2'>
                  {item.name}
                </Anchor>{' '}
                +
              </Heading>
              <Text size='small'>Duration: {item.duration}</Text>
            </>
          ))}

          <Paragraph>{description}</Paragraph>

          <Paragraph>
            <Text size='small'>Price:</Text> {price}
          </Paragraph>
          <Button color='accent-2' margin={{ horizontal: 'auto' }}>
            <Heading level='3' margin={{ vertical: 'none' }}>
              <strong>SELECT</strong>
            </Heading>
          </Button>
        </Box>
      </Box>
    )
  }
}
