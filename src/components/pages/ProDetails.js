import React from 'react'

import { Box, Button, Grid, Heading, InfiniteScroll, Image, Text, Paragraph } from 'grommet'
import ExampleCard from '../layout/ExampleCard'

const pro = {
  name: 'Rebecca Blake',
  title: 'Senior Professional',
  image: '/img/philipe-cavalcante-xe68QiMaDrQ-unsplash.jpg',
  id: '1',
  examples: [
    { title: 'Professional Service Example', image: '/img/dylan-nolte--D09rH5sTw4-unsplash.jpg' },
    { title: 'Another Professional Service Example', image: '/img/louis-hansel-e96ST3p7tn4-unsplash.jpg' },
    { title: 'One More Professional Service Example', image: '/img/joanne-caselyn-suarez-kCGhXLU32Bg-unsplash.jpg' },
    { title: 'Professional Service Example', image: '/img/luigi-pozzoli-hzquWrcAwQ4-unsplash.jpg' },
    { title: 'Another Professional Service Example', image: '/img/henk-van-der-steege-sJvE2oIWicA-unsplash.jpg' },
    { title: 'One More Professional Service Example', image: '/img/kuan-fang-w6BD_RZHnDs-unsplash.jpg' },
    { title: 'Professional Service Example', image: '/img/mungyu-kim-Ex57cKpwdnE-unsplash.jpg' },
    { title: 'Another Professional Service Example', image: '/img/dylan-nolte--D09rH5sTw4-unsplash.jpg' },
  ],
}

export const ProDetails = props => {
  props.setHeader('Pro Details')

  return (
    <Box fill justify='start' align='center' background='brand' size='large' pad='medium'>
      <Heading level='2' margin='none'>
        {pro.name}
      </Heading>
      <Heading level='3' margin={{ top: 'xsmall' }}>
        {pro.title}
      </Heading>

      <Box overflow='auto' margin={{ bottom: 'small' }} size='medium'>
        <Grid align='start' columns={{ count: 'fill', size: 'xsmall' }} gap='medium'>
          <InfiniteScroll items={pro.examples || []}>
            {example => (
              <ExampleCard {...example} key={example.id} onClickFavorite={() => this.updateFavorite(example.id)} />
            )}
          </InfiniteScroll>
        </Grid>
      </Box>

      <Paragraph size='small' margin={{ bottom: 'none' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita.
      </Paragraph>
      <Paragraph size='small' margin={{ top: 'xsmall' }}>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ab ducimus eum.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
      </Paragraph>
    </Box>
  )
}
