import React from 'react'

import { Box, Button, Grid, InfiniteScroll } from 'grommet'
import PurchasedCard from '../layout/PurchasedCard'

const purchases = [
  {
    date: '09/30/2019, Mon',
    items: [
      {
        name: 'Service Name Number I',
        duration: 30,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '12/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number II',
        duration: 15,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '12/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number III',
        duration: 60,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '12/12/2019',
        time: '12:30 PM',
      },
    ],
    totalPrice: '$360.00',
    id: '1',
    status: 'Pending',
  },
  {
    date: '08/30/2019, Mon',
    items: [
      {
        name: 'Service Name Number II',
        duration: 30,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '11/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number III',
        duration: 15,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '11/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number VI',
        duration: 60,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '11/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number XII',
        duration: 15,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '11/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number XVI',
        duration: 60,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '11/12/2019',
        time: '12:30 PM',
      },
    ],
    totalPrice: '$360.00',
    id: '2',
    status: 'Recieved',
  },
  {
    date: '07/30/2019, Mon',
    items: [
      {
        name: 'Service Name Number I',
        duration: 30,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '10/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number II',
        duration: 15,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '10/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number III',
        duration: 60,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '10/12/2019',
        time: '12:30 PM',
      },
      {
        name: 'Service Name Number XII',
        duration: 15,
        price: 100,
        quantity: 1,
        pro: 'Gabrielle White',
        date: '11/12/2019',
        time: '12:30 PM',
      },
    ],
    totalPrice: '$360.00',
    id: '3',
    status: 'Recieved',
  },
]

export const MyPurchases = props => {
  props.setHeader('My Purchases')

  return (
    <Box fill align='center' justify='start' background='brand'>
      <Box height='large' overflow='auto' margin={{ bottom: 'small' }}>
        <Grid align='start' columns={{ count: 'fill', size: 'full' }} gap='medium'>
          <InfiniteScroll items={purchases}>
            {purchase => (
              <PurchasedCard {...purchase} key={purchase.id} onClickFavorite={() => this.updateFavorite(purchase.id)} />
            )}
          </InfiniteScroll>
        </Grid>
      </Box>
      <Button label='Back to Top' href='#' />
    </Box>
  )
}
