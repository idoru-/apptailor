import React from 'react'

import { Box, Button, Heading, Tab, Tabs, Anchor } from 'grommet'
import { Basket as BasketIcon } from 'grommet-icons'
import ServicesList from '../layout/ServicesList'

export const SelectProduct = () => (
  <Box fill align='center' justify='start' background='brand'>
    <Box direction='row'>
      <Heading>Products and Services</Heading>
      <Anchor
        icon={<BasketIcon size='medium' />}
        label={
          <Heading level='4' href='#'>
            My Cart (0)
          </Heading>
        }
      />
    </Box>
    <Tabs>
      <Tab title='Services'>
        <Box pad='medium'>
          <ServicesList />
        </Box>
      </Tab>
      <Tab title='Products'>
        <Box pad='medium'>Some Products</Box>
      </Tab>
      <Tab title='Combos'>
        <Box pad='medium'>Some Combos</Box>
      </Tab>
    </Tabs>
    <Button label='Purchase' href='/professional' />
  </Box>
)
