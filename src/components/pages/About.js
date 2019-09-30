import React from 'react'

import { Box, Button, Text, Heading } from 'grommet'

export const About = props => {
  props.setHeader('About Company')

  return (
    <Box fill align='center' justify='start' background='brand'>
      <Heading level='3'>Working Hours</Heading>
      <Text>Sun - Wed: 9 AM - 8 PM</Text>
      <Text>Thur - Sat: 9 AM - 9 PM</Text>
      <Heading level='3'>Location</Heading>
      <Text>
        1 Dr Carlton B Goodlett Pl,
        <br />
        San Francisco, CA 94102
      </Text>
      <Text>(415) 555 - 5555</Text>
      <Button label='Back to Main Menu' href='/' margin='medium' />
      <Button label='View Order Summary' href='/order/summary' margin='small' />
    </Box>
  )
}
