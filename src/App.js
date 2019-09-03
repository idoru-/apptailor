import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Box, Grommet, grommet } from 'grommet'

import {
  MainMenu,
  Purchase,
  PurchaseSummary,
  SelectPro,
  SelectProduct,
  SelectDate,
  MyPurchases,
  Settings,
  Support,
} from './components/pages'
import { AppBar, Footer } from './components/layout'

function App() {
  return (
    <Router>
      <Grommet theme={grommet} full>
        <Box fill>
          <AppBar appName='My App' />
          <Box flex>
            <Switch>
              <Route path='/' exact component={MainMenu} />
              <Route path='/purchase' component={Purchase} />
              <Route path='/professional' component={SelectPro} />
              <Route path='/products' component={SelectProduct} />
              <Route path='/summary' component={PurchaseSummary} />
              <Route path='/date' component={SelectDate} />
              <Route path='/purchases' component={MyPurchases} />
              <Route path='/support' component={Support} />
              <Route path='/settings' component={Settings} />
            </Switch>
          </Box>
          <Footer appName='My App' />
        </Box>
      </Grommet>
    </Router>
  )
}

export default App
