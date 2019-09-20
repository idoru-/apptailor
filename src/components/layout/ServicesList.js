import React, { Component } from 'react'
import ProductCard from '../layout/ProductCard'

import { Box, InfiniteScroll } from 'grommet'

const services = [
  {
    name: 'Service Name Number I',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/louis-hansel-e96ST3p7tn4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nostrum itaque voluptates veritatis quibusdam officiis dignissimos iusto accusamus possimus.',
  },
  {
    name: 'Service Name Number II',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, odio.',
  },
  {
    name: 'Service Name Number III',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/james-fitzgerald-h2Sp-CFF9Jc-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number IV',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number V',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/mungyu-kim-Ex57cKpwdnE-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Service Name Number VI',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/micheile-henderson-IIEZ3Q0q2T4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number VII',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number VIII',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/micheile-henderson-IIEZ3Q0q2T4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number IX',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/kuan-fang-w6BD_RZHnDs-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number X',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number XI',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/fas-khan-n-DPU28GoEA-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number XII',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/dylan-nolte--D09rH5sTw4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number XIII',
    price: '$200.00',
    duration: '50 min',
    images: [
      '/img/anna-earl-J9cvIUrojUY-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '13',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
]

export default class ServicesList extends Component {
  render() {
    return (
      <Box height='medium' overflow='auto'>
        <InfiniteScroll items={services}>{service => <ProductCard {...service} key={service.id} />}</InfiniteScroll>
      </Box>
    )
  }
}
