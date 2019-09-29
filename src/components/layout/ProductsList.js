import React, { Component } from 'react'
import ProductCard from '../layout/ProductCard'

import { Box, InfiniteScroll } from 'grommet'

const products = [
  {
    name: 'Product Name Number I',
    price: '$60.00',
    images: [
      '/img/hubble-9Usgp6nD6YI-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nostrum itaque voluptates veritatis quibusdam officiis dignissimos iusto accusamus possimus.',
  },
  {
    name: 'Product Name Number II',
    price: '$60.00',
    images: [
      '/img/nery-montenegro-SmEty_TVr80-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, odio.',
  },
  {
    name: 'Product Name Number III',
    price: '$60.00',
    images: [
      '/img/freshh-connection-1DMNn6gBbwQ-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Product Name Number IV',
    price: '$60.00',
    images: [
      '/img/deanna-alys-6LBBOwkPzyQ-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Product Name Number V',
    price: '$60.00',
    images: [
      '/img/galina-n-miziNqvJx5M-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Product Name Number VI',
    price: '$60.00',
    images: [
      '/img/jason-blackeye-K1uLEiqTQEA-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Product Name Number VII',
    price: '$60.00',
    images: [
      '/img/goashape-BO1tbIm6IRc-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Product Name Number VIII',
    price: '$60.00',
    images: [
      '/img/micheile-henderson-IIEZ3Q0q2T4-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Product Name Number XII',
    price: '$60.00',
    images: [
      '/img/dylan-nolte--D09rH5sTw4-unsplash.jpg',
      '/img/brooke-lark-W9OKrxBqiZA-unsplash.jpg',
      '/img/clem-onojeghuo-AEL0ceW7IUU-unsplash.jpg',
    ],
    id: '12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
]

export default class ProductsList extends Component {
  render() {
    return (
      <Box height='medium' overflow='auto'>
        <InfiniteScroll items={products}>{product => <ProductCard {...product} key={product.id} />}</InfiniteScroll>
      </Box>
    )
  }
}
