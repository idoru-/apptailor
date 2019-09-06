import React, { Component } from 'react'

import { Box, Button, Grid, InfiniteScroll, Image, Text, Heading } from 'grommet'

const services = [
  {
    name: 'Service Name Number I',
    price: '$ 200',
    duration: '50 min',
    image: '/img/louis-hansel-e96ST3p7tn4-unsplash.jpg',
    id: '1',
  },
  {
    name: 'Service Name Number II',
    price: '$ 200',
    duration: '50 min',
    image: '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg',
    id: '2',
  },
  {
    name: 'Service Name Number III',
    price: '$ 200',
    duration: '50 min',
    image: '/img/james-fitzgerald-h2Sp-CFF9Jc-unsplash.jpg',
    id: '3',
  },
  {
    name: 'Service Name Number IV',
    price: '$ 200',
    duration: '50 min',
    image: '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
    id: '4',
  },
  {
    name: 'Service Name Number V',
    price: '$ 200',
    duration: '50 min',
    image: '/img/mungyu-kim-Ex57cKpwdnE-unsplash.jpg',
    id: '5',
  },
  {
    name: 'Service Name Number VI',
    price: '$ 200',
    duration: '50 min',
    image: '/img/micheile-henderson-IIEZ3Q0q2T4-unsplash.jpg',
    id: '6',
  },
  {
    name: 'Service Name Number VII',
    price: '$ 200',
    duration: '50 min',
    image: '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    id: '7',
  },
  {
    name: 'Service Name Number VIII',
    price: '$ 200',
    duration: '50 min',
    image: '/img/micheile-henderson-IIEZ3Q0q2T4-unsplash.jpg',
    id: '8',
  },
  {
    name: 'Service Name Number IX',
    price: '$ 200',
    duration: '50 min',
    image: '/img/kuan-fang-w6BD_RZHnDs-unsplash.jpg',
    id: '9',
  },
  {
    name: 'Service Name Number X',
    price: '$ 200',
    duration: '50 min',
    image: '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg',
    id: '10',
  },
  {
    name: 'Service Name Number XI',
    price: '$ 200',
    duration: '50 min',
    image: '/img/fas-khan-n-DPU28GoEA-unsplash.jpg',
    id: '11',
  },
  {
    name: 'Service Name Number XII',
    price: '$ 200',
    duration: '50 min',
    image: '/img/dylan-nolte--D09rH5sTw4-unsplash.jpg',
    id: '12',
  },
  {
    name: 'Service Name Number XIII',
    price: '$ 200',
    duration: '50 min',
    image: '/img/anna-earl-J9cvIUrojUY-unsplash.jpg',
    id: '13',
  },
]

export default class ServicesList extends Component {
  render() {
    return (
      <Box height='medium' width='large' overflow='auto'>
        <Grid columns='small' rows='small' pad='xsmall' gap='small'>
          <InfiniteScroll items={services}>
            {item => (
              <Box flex={false} pad='xsmall' background='dark-1' key={item.id}>
                <Image src={item.image} fit='cover' />
                <Heading level='5' margin='none'>
                  {item.name}
                </Heading>
                <Button>
                  <strong>+</strong>
                </Button>
              </Box>
            )}
          </InfiniteScroll>
        </Grid>
      </Box>
    )
  }
}
