import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Box, Grommet, grommet } from 'grommet'

import {
  MainMenu,
  Purchase,
  PurchaseSummary,
  SelectPro,
  SelectProduct,
  SelectDate,
  OrderSubmitted,
  SignIn,
  SignUp,
  Reward,
  MyPurchases,
  Settings,
  Success,
  Support,
} from './components/pages'
import { AppBar, Footer } from './components/layout'
import { Basket as BasketIcon } from 'grommet-icons'
import { Heading, Anchor } from 'grommet'

function App() {
  const [header, setHeader] = useState('')

  return (
    <Router>
      <Grommet theme={grommet} full>
        <Box fill>
          <AppBar appName='My App' />

          <Box direction='row' background='brand' pad={{ horizontal: 'medium' }}>
            <Box basis='2/3'>
              <Heading>{header}</Heading>
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

          <Box flex>
            <Switch>
              <Route path='/' exact component={MainMenu} />
              <Route path='/purchase' component={Purchase} />
              <Route path='/professional' component={SelectPro} />
              <Route path='/products' component={_ => <SelectProduct setHeader={setHeader} />} />
              <Route path='/summary' component={PurchaseSummary} />
              <Route path='/date' component={SelectDate} />
              <Route path='/purchases' component={MyPurchases} />
              <Route path='/reward' component={Reward} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/success' component={Success} />
              <Route path='/support' component={Support} />
              <Route path='/settings' component={Settings} />
              <Route path='/submitted' component={OrderSubmitted} />
            </Switch>
          </Box>
          <Footer appName='My App' />
        </Box>
      </Grommet>
    </Router>
  )
}

export default App
