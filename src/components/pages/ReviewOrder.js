import React from 'react'

import { Box, Button, Heading, Table, TableBody, TableCell, TableHeader, TableRow, Text } from 'grommet'

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
              Price
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope='row'>
              <Heading level='3'>Product Product</Heading>
              <Text>Pro: First Name Last Name</Text>
              <Text>Date: 09/21/2019 Time: 12:30 AM</Text>
            </TableCell>
            <TableCell>120.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope='row'>
              <Heading level='3'>Product Product Product</Heading>
              <Text>Pro: First Name Last Name</Text>
              <Text>Date: 09/21/2019 Time: 12:30 AM</Text>
            </TableCell>
            <TableCell>160.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope='row'>
              <Heading level='3'>Service Service</Heading>
              <Text>Pro: First Name Last Name</Text>
              <Text>Date: 09/21/2019 Time: 12:30 AM</Text>
            </TableCell>
            <TableCell>200.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope='row'>
              <strong> </strong>
            </TableCell>
            <TableCell> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope='row'>Total</TableCell>
            <TableCell>480.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    <Button label='Place Order' href='/order/submitted' />
  </Box>
)
