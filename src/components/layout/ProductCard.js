import React, { Component } from 'react'

import { Box, Button, Carousel, Image, Paragraph, Text, Heading } from 'grommet'

export default class ProductCard extends Component {
  render() {
    const { name, price, images, description, id } = this.props

    return (
      <Box width='medium' margin={{ bottom: 'medium' }} flex='grow' background='dark-1' key={id}>
        <Box height='small' overflow='hidden'>
          <Carousel fill>
            {(images || []).map((img, index) => (
              <Image fit='cover' key={index + ':' + id} src={img} />
            ))}
          </Carousel>
        </Box>
        <Box pad='small'>
          <Heading level='3' margin='none'>
            {name}
          </Heading>
          <Paragraph>{description}</Paragraph>
          <Paragraph>
            <Text size='small'>Price:</Text> {price}
          </Paragraph>
          <Button color='accent-2' margin={{ horizontal: 'auto' }}>
            <Heading level='3' margin={{ vertical: 'none' }}>
              <strong>ADD TO CART</strong>
            </Heading>
          </Button>
        </Box>
      </Box>
    )
  }
}
