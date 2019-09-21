import React from 'react'

import { Box, Button, CheckBox, Heading, Text } from 'grommet'
import { Link as LinkIcon } from 'grommet-icons'

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
    <Text>
      <LinkIcon color='brand' /> Calendar
    </Text>
    <Text>
      <LinkIcon color='brand' /> Facebook
    </Text>
    <Button label='Link New Account' href='#' margin='small' />
    <Heading level='3'>Delete Account</Heading>
    <Text>This action is forever.</Text>
    <Button label='Delete' href='#' margin='small' />
  </Box>
)
