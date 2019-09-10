import React, { Component } from 'react'

import { Box, Button, Grid, InfiniteScroll, Image, Paragraph, Heading } from 'grommet'

const services = [
  {
    name: 'Service Name Number I',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/louis-hansel-e96ST3p7tn4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '1',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nostrum itaque voluptates veritatis quibusdam officiis dignissimos iusto accusamus possimus.',
  },
  {
    name: 'Service Name Number II',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '2',
    discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, odio.',
  },
  {
    name: 'Service Name Number III',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/james-fitzgerald-h2Sp-CFF9Jc-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '3',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number IV',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '4',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number V',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/mungyu-kim-Ex57cKpwdnE-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '5',
    discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Service Name Number VI',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/micheile-henderson-IIEZ3Q0q2T4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '6',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number VII',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '7',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number VIII',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/micheile-henderson-IIEZ3Q0q2T4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '8',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number IX',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/kuan-fang-w6BD_RZHnDs-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '9',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number X',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '10',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number XI',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/fas-khan-n-DPU28GoEA-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '11',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number XII',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/dylan-nolte--D09rH5sTw4-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '12',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
  {
    name: 'Service Name Number XIII',
    price: '$ 200',
    duration: '50 min',
    images: [
      '/img/anna-earl-J9cvIUrojUY-unsplash.jpg',
      '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg',
      '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg',
    ],
    id: '13',
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate maxime nulla reiciendis tenetur. Recusandae.',
  },
]

export default class ServicesList extends Component {
  render() {
    return (
      <Box height='medium' width='large' overflow='auto'>
        <Grid columns='small' rows='medium' pad='xsmall' gap='small'>
          <InfiniteScroll items={services}>
            {item => (
              <Box flex={false} background='dark-1' key={item.id}>
                <Image src={item.image} fit='cover' />
                <Box pad='small'>
                  <Heading level='5' margin='none'>
                    {item.name}
                  </Heading>
                  <Paragraph size='small'>{item.discription}</Paragraph>
                  <Button color='accent-2' margin={{ horizontal: 'auto' }}>
                    <Heading level='3' margin={{ vertical: 'none' }}>
                      <strong>SELECT</strong>
                    </Heading>
                  </Button>
                </Box>
              </Box>
            )}
          </InfiniteScroll>
        </Grid>
      </Box>
    )
  }
}
