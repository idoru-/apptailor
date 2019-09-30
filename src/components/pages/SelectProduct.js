import React from 'react'

import { Box, Button, Tab, Tabs } from 'grommet'
import ServicesList from '../layout/ServicesList'
import ProductsList from '../layout/ProductsList'
import CombosList from '../layout/CombosList'

export const SelectProduct = props => {
  props.setHeader('Products and Services')

  return (
    <Box fill align='center' justify='start' background='brand'>
      <Tabs margin={{ bottom: 'small' }}>
        <Tab title='Services'>
          <Box pad='medium'>
            <ServicesList />
          </Box>
        </Tab>
        <Tab title='Products'>
          <Box pad='medium'>
            <ProductsList />
          </Box>
        </Tab>
        <Tab title='Combos'>
          <Box pad='medium'>
            <CombosList />
          </Box>
        </Tab>
      </Tabs>
      <Button label='Next' href='/order/professional' />
    </Box>
  )
}
