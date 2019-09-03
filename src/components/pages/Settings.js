import React from 'react'

import { Box, Button, CheckBox, Heading, Text } from 'grommet'

function NotificationsCheckbox() {
  const [checked, setChecked] = React.useState(true)
  return (
    <CheckBox
      checked={checked}
      label='Receive Push Notifications'
      onChange={event => setChecked(event.target.checked)}
    />
  )
}

export const Settings = () => (
  <Box fill align='center' justify='center'>
    <Heading>Settings</Heading>
    <Box>{NotificationsCheckbox()}</Box>
    <Heading level='3'>Linked Accounts</Heading>
    <Text>Calendar</Text>
    <Text>Facebook</Text>
    <Button label='Link New Account' href='#' />
    <Heading level='3'>Delete Account</Heading>
    <Text>This action is forever.</Text>
    <Button label='Delete' href='#' />
  </Box>
)
