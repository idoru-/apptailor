import React, { Component } from 'react'

import { Box, Button, Image, Paragraph, Text, Heading, Anchor } from 'grommet'
import { Calendar as CalendarIcon, Clock as ClockIcon, Alert as AlertIcon } from 'grommet-icons'

export default class ServiceCardCart extends Component {
  dataOrAlert(data) {
    if (data == null) {
      return (
        <Anchor color='accent-4' href='#'>
          <Text size='small'>{'  '}TAP TO SELECT</Text>
          {'  '}
          <AlertIcon color='accent-4' />
        </Anchor>
      )
    } else {
      return data
    }
  }

  render() {
    const { name, price, proName, duration, image, date, time, id } = this.props

    return (
      <Box width='medium' margin={{ bottom: 'medium' }} flex='grow' background='dark-1' key={id}>
        <Box height='small' overflow='hidden'>
          <Image src={image} fit='cover' />
        </Box>
        <Box pad='medium'>
          <Heading level='2' margin='none'>
            <Anchor href='#' color='accent-2'>
              {name}
            </Anchor>
          </Heading>
          <Box direction='row' justify='start' gap='medium'>
            <Paragraph>
              <Anchor href='/order/date'>
                <CalendarIcon color='accent-1' />
              </Anchor>
              {'  '}
              {this.dataOrAlert(date)}
            </Paragraph>
            <Paragraph>
              <Anchor href='/order/date'>
                <ClockIcon color='accent-1' />
              </Anchor>
              {'  '} {this.dataOrAlert(time)}
            </Paragraph>
          </Box>
          <Box direction='row' justify='between'>
            <Paragraph margin={{ vertical: 'none' }}>
              <Anchor href='/order/professional'>Pro:</Anchor>
              {this.dataOrAlert(proName)}
            </Paragraph>
          </Box>
          <Box direction='row' justify='between'>
            <Paragraph margin={{ vertical: 'none' }}>
              <Text size='small'>Duration:</Text> {duration}
            </Paragraph>
            <Paragraph margin={{ vertical: 'none' }}>
              <Text size='small'>Quantity:</Text> 1
            </Paragraph>
          </Box>
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
