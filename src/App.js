import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Box, Grommet, grommet } from 'grommet'

import {
  MainMenu,
  Purchase,
  PurchaseSummary,
  OrderSummary,
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
  const [header, setHeader] = useState(undefined)

  return (
    <Router>
      <Grommet theme={grommet} full>
        <Box fill>
          <AppBar appName='My App' />

          {header !== undefined && (
            <Box>
              <Box direction='row-reverse' background='brand' pad={{ horizontal: 'medium' }}>
                <Anchor
                  icon={<BasketIcon size='medium' />}
                  label={
                    <Heading level='4' href='#' margin={{ horizontal: 'small' }}>
                      My&nbsp;Cart&nbsp;(0)
                    </Heading>
                  }
                />
              </Box>
              <Box pad={{ horizontal: 'medium' }} align='center' background='brand'>
                <Heading margin={{ top: 'none', bottom: 'medium' }}>{header}</Heading>
              </Box>
            </Box>
          )}

          <Box flex>
            <Switch>
              <Route path='/' exact component={_ => <MainMenu setHeader={setHeader} />} />
              <Route path='/purchase' component={_ => <Purchase setHeader={setHeader} />} />
              <Route path='/order/professional' component={_ => <SelectPro setHeader={setHeader} />} />
              <Route path='/order/products' component={_ => <SelectProduct setHeader={setHeader} />} />
              <Route path='/summary' component={PurchaseSummary} />
              <Route path='/order/summary' component={OrderSummary} />
              <Route path='/order/date' component={_ => <SelectDate setHeader={setHeader} />} />
              <Route path='/order/submitted' component={_ => <OrderSubmitted setHeader={setHeader} />} />
              <Route path='/purchases' component={_ => <MyPurchases setHeader={setHeader} />} />
              <Route path='/reward' component={Reward} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/signup/success' component={Success} />
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
