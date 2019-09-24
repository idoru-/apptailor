import React from 'react'

import { Box, Button, Heading, Form, TextArea, TextInput } from 'grommet'

function FormTextInput() {
  const [value, setValue] = React.useState('')
  return (
    <TextInput
      name='subject'
      placeholder='Subject'
      label='Subject'
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  )
}

function FormTextArea() {
  const [value, setValue] = React.useState('')
  return <TextArea placeholder='Message' value={value} onChange={event => setValue(event.target.value)} />
}

export const SupportApp = () => (
  <Box fill align='center' justify='start' gap='medium'>
    <Heading>App Support</Heading>
    <Heading level='3'>Send Message</Heading>
    <Form>
      <Box gap='medium'>
        <Box>{FormTextInput()}</Box>
        <Box size='large'>{FormTextArea()}</Box>
      </Box>
      <Button type='submit' primary label='Submit' href='#' margin={{ top: 'medium' }} />
    </Form>
  </Box>
)
