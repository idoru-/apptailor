import React from 'react'

import { Box, Button, Grid, InfiniteScroll, Heading } from 'grommet'
import ProCard from '../layout/ProCard'

const pros = [
  {
    name: 'Rebecca Blake',
    title: 'Senior Professional',
    image: '/img/philipe-cavalcante-xe68QiMaDrQ-unsplash.jpg',
    id: '1',
  },
  {
    name: 'Mike Johnson',
    title: 'Senior Professional',
    image: '/img/nicolas-horn-MTZTGvDsHFY-unsplash.jpg',
    id: '2',
  },
  {
    name: 'Shannon Huntington',
    title: 'Junior Professional',
    image: '/img/toshi-lySzv_cqxH8-unsplash.jpg',
    id: '1',
  },
  {
    name: 'Gabrielle Johnson',
    title: 'Senior Professional',
    image: '/img/rachel-pfuetzner-0fN7Fxv1eWA-unsplash.jpg',
    id: '2',
  },
]

export const SelectPro = props => {
  props.setHeader('Select Pro')

  return (
    <Box fill align='center' justify='start' background='brand'>
      <Heading level='3'>Our Professionals</Heading>
      <Box height='large' overflow='auto' margin={{ bottom: 'small' }}>
        <Grid align='start' columns={{ count: 'fill', size: 'full' }} gap='medium'>
          <InfiniteScroll items={pros}>
            {pro => <ProCard {...pro} key={pro.id} onClickFavorite={() => this.updateFavorite(pro.id)} />}
          </InfiniteScroll>
        </Grid>
      </Box>
      <Button label='Next' href='/date' />
    </Box>
  )
}
