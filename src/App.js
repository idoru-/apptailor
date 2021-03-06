import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Box, Grommet, grommet } from 'grommet'

import {
  About,
  MainMenu,
  Purchase,
  OrderSummary,
  ReviewOrder,
  SelectPro,
  SelectProduct,
  SelectDate,
  OrderSubmitted,
  SignIn,
  SignUp,
  Cart,
  Reward,
  ProDetails,
  MyPurchases,
  PurchaseDetails,
  Settings,
  Success,
  Support,
  SupportApp,
  SupportClient,
} from './components/pages'
import { AppBar, Footer, HeaderTitleCart } from './components/layout'

function App() {
  const [header, setHeader] = useState(undefined)

  return (
    <Router>
      <Grommet theme={grommet} full>
        <Box fill>
          <AppBar appName='My App' />

          {header && <HeaderTitleCart header={header} />}

          <Box flex>
            <Switch>
              <Route path='/' exact component={_ => <MainMenu setHeader={setHeader} />} />
              <Route path='/purchase' component={_ => <Purchase setHeader={setHeader} />} />
              <Route path='/about' component={_ => <About setHeader={setHeader} />} />
              <Route path='/order/professional' component={_ => <SelectPro setHeader={setHeader} />} />
              <Route path='/order/products' component={_ => <SelectProduct setHeader={setHeader} />} />
              <Route path='/order/summary' component={OrderSummary} />
              <Route path='/order/review' component={ReviewOrder} />
              <Route path='/order/date' component={_ => <SelectDate setHeader={setHeader} />} />
              <Route path='/order/submitted' component={_ => <OrderSubmitted setHeader={setHeader} />} />
              <Route path='/pro' exact component={_ => <ProDetails setHeader={setHeader} />} />
              <Route path='/purchases' exact component={_ => <MyPurchases setHeader={setHeader} />} />
              <Route path='/purchases/details' component={_ => <PurchaseDetails setHeader={setHeader} />} />
              <Route path='/cart' component={Cart} />
              <Route path='/reward' component={Reward} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/signup/success' component={Success} />
              <Route path='/support' exact component={Support} />
              <Route path='/support/app' component={SupportApp} />
              <Route path='/support/client' component={SupportClient} />
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
