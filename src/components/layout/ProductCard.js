import React, { Component } from 'react'

import { Box, Button, Carousel, Image, Paragraph, Heading } from 'grommet'

export default class ProductCard extends Component {
  render() {
    const { name, price, duration, images, description, id } = this.props

    return (
      <Box width='medium' flex='grow' background='dark-1' key={id}>
        <Box height='small' overflow='hidden'>
          <Carousel fill>
            {(images || []).map((img, index) => (
              <Image fit='cover' key={index + ':' + id} src={img} />
            ))}
          </Carousel>
        </Box>
        <Box pad='small'>
          <Heading level='5' margin='none'>
            {name}
          </Heading>
          <Paragraph>{description}</Paragraph>
          <Paragraph>Duration: {duration}</Paragraph>
          <Paragraph>{price}</Paragraph>
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
