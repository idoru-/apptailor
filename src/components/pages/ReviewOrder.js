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
              Price, $
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope='row'>
              <Heading level='3'>Product Product ( x1 )</Heading>
              <Text>09/21/2019, Sat | 12:30 PM</Text>
              <Text>Pro: First Name Last Name</Text>
              <Text size='small'>50 min</Text>
            </TableCell>
            <TableCell verticalAlign='bottom'>120.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope='row'>
              <Heading level='3'>Service Service Product Product Product ( x1 )</Heading>
              <Text>09/21/2019, Sat | 1:30 PM</Text>
              <Text>Pro: First Name Last Name</Text>
              <Text size='small'>50 min</Text>
            </TableCell>
            <TableCell verticalAlign='bottom'>160.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope='row'>
              <Heading level='3'>Service Service ( x1 )</Heading>
              <Text>09/21/2019, Sat | 2:30 PM</Text>
              <Text>Pro: First Name Last Name</Text>
              <Text size='small'>50 min</Text>
            </TableCell>
            <TableCell verticalAlign='bottom'>200.00</TableCell>
          </TableRow>
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
