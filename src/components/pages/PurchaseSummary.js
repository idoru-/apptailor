import React from 'react'

import { Box, Button, Table, TableBody, TableCell, TableHeader, TableRow } from 'grommet'

export const PurchaseSummary = props => {
  props.setHeader('Purchase Summary')

  return (
    <Box fill align='center' justify='start' background='brand'>
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
                <strong>Product Product</strong>
              </TableCell>
              <TableCell>120.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'>
                <strong>Product Product Product</strong>
              </TableCell>
              <TableCell>160.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'>
                <strong>Service Service</strong>
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
      <Button label='Place Order' href='/submitted' />
    </Box>
  )
}
