import React from 'react'

import { Box, Button, Tab, Tabs } from 'grommet'
import ServicesList from '../layout/ServicesList'

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
          <Box pad='medium'>Some Products</Box>
        </Tab>
        <Tab title='Combos'>
          <Box pad='medium'>Some Combos</Box>
        </Tab>
      </Tabs>
      <Button label='Next' href='/order/professional' />
    </Box>
  )
}
