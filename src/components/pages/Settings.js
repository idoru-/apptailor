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

export const Settings = props => {
  props.setHeader('Settings')

  return (
    <Box fill background='brand' align='center' justify='center'>
      <Box>{NotificationsCheckbox()}</Box>
      <Heading level='3'>Linked Accounts</Heading>
      <Text>
        <LinkIcon color='accent-3' /> Calendar
      </Text>
      <Text>
        <LinkIcon color='accent-3' /> Facebook
      </Text>
      <Button label='Link New Account' href='#' margin='small' />
      <Heading level='3'>Delete Account</Heading>
      <Text>This action is forever.</Text>
      <Button label='Delete' href='#' margin='small' />
    </Box>
  )
}
