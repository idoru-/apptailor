import React from 'react'

import { Anchor, Box, Button, Text, Heading, Paragraph, Table, TableRow, TableCell } from 'grommet'

export const About = props => {
  props.setHeader('About Company')

  return (
    <Box fill justify='start' gap='xlarge' background='brand'>
      <Box align='center'>
        <Heading level='3'>Working Hours</Heading>
        <Table>
          <TableRow>
            <TableCell>Sun - Wed:</TableCell>
            <TableCell>12 AM</TableCell>
            <TableCell> - </TableCell>
            <TableCell>8 PM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Thur - Sat:</TableCell>
            <TableCell>9 AM</TableCell>
            <TableCell> - </TableCell>
            <TableCell>8 PM</TableCell>
          </TableRow>
        </Table>
        <Heading level='3'>Location</Heading>
        <Text>
          1 Dr Carlton B Goodlett Pl,
          <br />
          San Francisco, CA 94102
        </Text>
        <Paragraph>
          <Anchor href='tel:1-408-555-5555'>+1 408 555 5555</Anchor>
        </Paragraph>
      </Box>
      <Box gap='medium' align='center'>
        <Button label='Back to Main Menu' href='/' />
        <Button label='Products and Services' href='/order/products' />
      </Box>
    </Box>
  )
}
