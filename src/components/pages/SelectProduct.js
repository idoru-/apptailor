import React from 'react'

import { Box, Button, Heading, Tab, Tabs, Anchor } from 'grommet'
import { Basket as BasketIcon } from 'grommet-icons'
import ServicesList from '../layout/ServicesList'

export const SelectProduct = () => (
  <Box fill align='center' justify='start' background='brand'>
    <Box direction='row' pad={{ horizontal: 'medium' }}>
      <Box basis='2/3'>
        <Heading>Products and Services</Heading>
      </Box>
      <Box margin={{ vertical: 'small' }}>
        <Anchor
          icon={<BasketIcon size='medium' />}
          label={
            <Heading level='4' href='#' textAlign='end'>
              My&nbsp;Cart&nbsp;(0)
            </Heading>
          }
        />
      </Box>
    </Box>
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
    <Button label='Purchase' href='/professional' />
  </Box>
)
