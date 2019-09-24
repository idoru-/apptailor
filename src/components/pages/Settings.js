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
      toggle
    />
  )
}

export const Settings = () => (
  <Box fill align='center' gap='large'>
    <Heading margin={{ top: 'xlarge' }}>Settings</Heading>
    <Box align='center'>{NotificationsCheckbox()}</Box>
    <Box align='center'>
      <Heading level='3'>Linked Accounts</Heading>
      <Text>
        <LinkIcon color='brand' /> Calendar
      </Text>
      <Text>
        <LinkIcon color='brand' /> Facebook
      </Text>
      <Button label='Link New Account' href='#' margin='small' />
    </Box>
    <Box align='center'>
      <Heading level='3'>Delete Account</Heading>
      <Text>This action is forever.</Text>
      <Button label='Delete' href='#' margin='small' />
    </Box>
  </Box>
)
