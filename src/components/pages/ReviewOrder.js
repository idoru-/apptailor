import React from 'react'

import { Box, Button, Heading, InfiniteScroll, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet'
import ServiceCardReviewOrder from '../layout/ServiceCardReviewOrder'

const services = [
  {
    name: 'Service Name Number III',
    price: '200.00',
    duration: 50,
    id: '1',
    proName: 'Shannon Huntington',
    date: '09/21/2019 (Sat)',
    time: '12:30AM',
    quantity: 1,
  },
  {
    name: 'Service Name Number III',
    price: '200.00',
    duration: 50,
    id: '2',
    proName: 'Shannon Huntington',
    date: '09/21/2019 (Sat)',
    time: '12:30AM',
    quantity: 5,
  },
  {
    name: 'Service Name Number III',
    price: '200.00',
    duration: 50,
    id: '3',
    proName: 'Shannon Huntington',
    date: '09/21/2019 (Sat)',
    time: '12:30AM',
    quantity: 2,
  },
]

export const ReviewOrder = () => (
  <Box fill align='center' justify='start' background='brand'>
    <Heading>Review Order</Heading>
    <Box pad='small'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope='col' border='bottom'>
              Name
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Price, $
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <InfiniteScroll items={services} overflow={{ vertical: 'scroll' }}>
            {service => <ServiceCardReviewOrder {...service} key={service.id} />}
          </InfiniteScroll>

          <TableRow>
            <TableCell scope='row'>
              <strong> </strong>
            </TableCell>
            <TableCell> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope='row'>
              <strong>Total</strong>
            </TableCell>
            <TableCell>
              <strong>480.00</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    <Button label='Place Order' href='/order/submitted' />
  </Box>
)
