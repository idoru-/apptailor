import React, { Component } from 'react'
import ComboCard from '../layout/ComboCard'

import { Box, InfiniteScroll } from 'grommet'

const combos = [
  {
    name: 'Here Comes a Combo Name',
    items: [
      { name: 'Service Name Number I', duration: '30 min' },
      { name: 'Service Name Number II', duration: '15 min' },
      { name: 'Service Name Number III', duration: '60 min' },
    ],
    price: '$360.00',
    id: '1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nostrum itaque voluptates veritatis quibusdam officiis dignissimos iusto accusamus possimus.',
  },
  {
    name: 'Here Comes a Another Name',
    items: [
      { name: 'Service Name Number IV', duration: '40 min' },
      { name: 'Service Name Number I', duration: '15 min' },
    ],
    price: '$240.00',
    id: '2',
    description:
      'Corrupti alias nostrum itaque voluptates veritatis quibusdam officiis dignissimos iusto accusamus possimus.',
  },
  {
    name: 'Here Comes a Bit More Longer Combo Name',
    items: [
      { name: 'Service Name Number IX', duration: '30 min' },
      { name: 'Service Name Number XI', duration: '25 min' },
      { name: 'Service Name Number XII', duration: '60 min' },
    ],
    price: '$580.00',
    id: '3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nostrum itaque voluptates dignissimos iusto accusamus possimus.',
  },
]

export default class CombosList extends Component {
  render() {
    return (
      <Box height='medium' overflow='auto'>
        <InfiniteScroll items={combos}>{combo => <ComboCard {...combo} key={combo.id} />}</InfiniteScroll>
      </Box>
    )
  }
}
