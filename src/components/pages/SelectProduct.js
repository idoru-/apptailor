import React from 'react'

import { Box, Button, Heading, Tab, Tabs, Anchor } from 'grommet'
import { Basket as BasketIcon } from 'grommet-icons'

export const SelectProduct = () => (
  <Box fill align='center' justify='start'>
    <Heading>Purchase</Heading>
    <Anchor icon={<BasketIcon color='brand' size='medium' />} label={<Heading level='4'>My Cart (0)</Heading>} />
    <Tabs>
      <Tab title='Services'>
        <Box pad='medium'>Some Services</Box>
      </Tab>
      <Tab title='Products'>
        <Box pad='medium'>Some Products</Box>
      </Tab>
      <Tab title='Combos'>
        <Box pad='medium'>Some Combos</Box>
      </Tab>
    </Tabs>
    <Button label='Next' href='/professional' />
  </Box>
)
