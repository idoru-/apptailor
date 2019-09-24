import React from 'react'

import { Box, Button, Heading, InfiniteScroll } from 'grommet'
import ServiceCardCart from '../layout/ServiceCardCart'

const services = [
  {
    name: 'Service Name Number I',
    price: '$200.00',
    duration: '50 min',
    image: '/img/louis-hansel-e96ST3p7tn4-unsplash.jpg',
    id: '1',
    proName: 'Shannon Huntington',
    date: '09/21/2019',
    time: '12:30AM',
  },
  {
    name: 'Service Name Number III',
    price: '$200.00',
    duration: '50 min',
    image: '/img/james-fitzgerald-h2Sp-CFF9Jc-unsplash.jpg',
    id: '3',
    proName: 'Shannon Huntington',
    date: '09/21/2019',
    time: '12:30AM',
  },
  {
    name: 'Service Name Number IV',
    price: '$200.00',
    duration: '50 min',
    image: '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
    id: '4',
    proName: 'Shannon Huntington',
    date: '09/21/2019',
    time: '12:30AM',
  },
  {
    name: 'Service Name Number V',
    price: '$200.00',
    duration: '50 min',
    image: '/img/mungyu-kim-Ex57cKpwdnE-unsplash.jpg',
    id: '5',
    proName: 'Shannon Huntington',
    date: '09/21/2019',
    time: '12:30AM',
  },
  {
    name: 'Service Name Number IX',
    price: '$200.00',
    duration: '50 min',
    image: '/img/kuan-fang-w6BD_RZHnDs-unsplash.jpg',
    id: '9',
    proName: 'Shannon Huntington',
    date: '09/21/2019',
    time: '12:30AM',
  },
  {
    name: 'Service Name Number X',
    price: '$200.00',
    duration: '50 min',
    image: '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg',
    id: '10',
    proName: 'Shannon Huntington',
    date: '09/21/2019',
    time: '12:30AM',
  },
  {
    name: 'Service Name Number XIII',
    price: '$200.00',
    duration: '50 min',
    image: '/img/anna-earl-J9cvIUrojUY-unsplash.jpg',
    id: '13',
    proName: 'Shannon Huntington',
    date: '09/21/2019',
    time: '12:30AM',
  },
]

export const Cart = () => (
  <Box fill align='center' justify='start' background='brand'>
    <Heading>My Cart (7)</Heading>
    <Box pad='medium' height='medium' overflow='auto'>
      <InfiniteScroll items={services}>{service => <ServiceCardCart {...service} key={service.id} />}</InfiniteScroll>
    </Box>
    <Box direction='row'>
      <Box basis='2/3'>
        <Heading level='3'>Subtotal:</Heading>
        <Heading level='3' margin={'none'}>
          Tax:
        </Heading>
        <Heading level='3'>Total:</Heading>
      </Box>
      <Box>
        <Heading level='3'>$560.00</Heading>
        <Heading level='3' margin={'none'}>
          $30.00
        </Heading>
        <Heading level='3'>$590.00</Heading>
      </Box>
    </Box>
    <Button label='To Checkout' href='/order/review' />
  </Box>
)
