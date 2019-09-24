import React, { Component } from 'react'

import { Box, Button, Image, Paragraph, Text, Heading, Anchor } from 'grommet'
import { Calendar as CalendarIcon, Clock as ClockIcon } from 'grommet-icons'

export default class ServiceCardCart extends Component {
  render() {
    const { name, price, proName, duration, image, date, time, id } = this.props

    return (
      <Box width='medium' margin={{ bottom: 'medium' }} flex='grow' background='dark-1' key={id}>
        <Box height='small' overflow='hidden'>
          <Image src={image} fit='cover' />
        </Box>
        <Box pad='small'>
          <Heading level='2' margin='none'>
            <Anchor href='#' color='accent-2'>
              {name}
            </Anchor>
          </Heading>
          <Paragraph>
            <Anchor href='/order/date'>
              <CalendarIcon color='accent-1' />
            </Anchor>
            {'  '}
            {date}
          </Paragraph>
          <Paragraph>
            <Anchor href='/order/date'>
              <ClockIcon color='accent-1' />
            </Anchor>
            {'  '} {time}
          </Paragraph>
          <Paragraph>
            <Text size='small'>Duration:</Text> {duration}
          </Paragraph>
          <Paragraph>
            <Anchor href='/order/professional'>Pro:</Anchor> {proName}
          </Paragraph>
          <Paragraph>
            <Text size='small'>Quantity:</Text> 1
          </Paragraph>
          <Paragraph>
            <Text size='small'>Price:</Text> {price}
          </Paragraph>
          <Button color='accent-2' margin={{ horizontal: 'auto' }}>
            <Heading level='5' margin={{ vertical: 'none' }}>
              Delete
            </Heading>
          </Button>
        </Box>
      </Box>
    )
  }
}
