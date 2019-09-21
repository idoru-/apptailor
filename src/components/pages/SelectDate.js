import React from 'react'

import { Box, Button, Calendar, Heading, Table, TableBody, TableCell, TableRow } from 'grommet'

export const SelectDate = props => {
  props.setHeader('Book New Appointment')

  return (
    <Box fill align='center' justify='start' background='brand'>
      <Heading level='3'>Select Date</Heading>
      <Calendar size='small' date={new Date().toISOString()} onSelect={date => {}} />
      <Heading level='3'>Select Timespot</Heading>
      <Box pad='small'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell scope='row'>10:00</TableCell>
              <TableCell>12:00</TableCell>
              <TableCell>14:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'>10:30</TableCell>
              <TableCell>12:30</TableCell>
              <TableCell>14:30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'>11:00</TableCell>
              <TableCell>13:00</TableCell>
              <TableCell>15:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'>11:30</TableCell>
              <TableCell>13:30</TableCell>
              <TableCell>15:30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Button label='Next' href='/summary' />
    </Box>
  )
}
