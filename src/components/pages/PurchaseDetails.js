import React from 'react'

import { Box, Button, Heading, Anchor, Text, Paragraph } from 'grommet'

const purchase = {
  date: '09/30/2019, Mon',
  purchases: [
    {
      name: 'Service Name Number I',
      duration: 30,
      price: 100,
      quantity: 1,
      pro: 'Gabrielle White',
      date: '12/12/2019 (Thur)',
      time: '12:30 PM',
    },
    {
      name: 'Service Name Number II',
      duration: 15,
      price: 100,
      quantity: 1,
      pro: 'Gabrielle White',
      date: '12/12/2019 (Thur)',
      time: '12:30 PM',
    },
    {
      name: 'Service Name Number III',
      duration: 60,
      price: 100,
      quantity: 1,
      pro: 'Gabrielle White',
      date: '12/12/2019 (Thur)',
      time: '12:30 PM',
    },
  ],
  totalPrice: '$3,600.00',
  id: '1',
  status: 'Recieved',
  paymentMethod: 'Credit Card',
}

export const PurchaseDetails = props => {
  props.setHeader('Purchase Details')

  return (
    <Box fill justify='start' background='brand' size='large' pad='medium'>
      <Heading level='3' margin='none'>
        {purchase.date}
      </Heading>

      {(purchase.purchases || []).map(purchase => (
        <>
          <Heading level='4' margin={{ bottom: 'small' }}>
            <Anchor href='#' color='accent-2'>
              {purchase.name}
            </Anchor>{' '}
          </Heading>
          <Box direction='row' justify='between'>
            <Text size='small'>Date: {purchase.date}</Text>
            <Text size='small'>Time: {purchase.time}</Text>
            <Text size='small'>Duration: {purchase.duration} min</Text>
          </Box>
          <Box direction='row' justify='between'>
            <Text size='small'>Price: ${purchase.price}</Text>
            <Text size='small'>Pro: {purchase.pro}</Text>
          </Box>
        </>
      ))}

      <Paragraph>Service Status: {purchase.status}</Paragraph>
      <Paragraph>Payment Method: {purchase.paymentMethod}</Paragraph>
      <Paragraph>
        <Text size='small'>Total:</Text> {purchase.totalPrice}
      </Paragraph>
      <Box direction='row' justify='between'>
        <Button color='accent-2' margin={{ horizontal: 'auto' }}>
          <Heading level='3' margin={{ vertical: 'none' }}>
            <strong>ADD ALL TO CART</strong>
          </Heading>
        </Button>
      </Box>
    </Box>
  )
}
