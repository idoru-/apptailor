import React, { Component } from 'react'

import { Text, Heading, TableCell, TableRow } from 'grommet'

export default class ServiceCardReviewOrder extends Component {
  render() {
    const { name, price, duration, quantity, date, time, proName } = this.props

    return (
      <TableRow>
        <TableCell scope='row'>
          <Heading level='3'>
            {name} ( x{quantity} )
          </Heading>
          <Text>
            {date} | {time}
          </Text>
          <Text>Pro: {proName}</Text>
          <Text size='small'>{duration} min</Text>
        </TableCell>
        <TableCell verticalAlign='bottom'>${price}</TableCell>
      </TableRow>
    )
  }
}
