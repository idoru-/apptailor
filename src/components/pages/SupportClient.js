import React from 'react'

import { Box, Button, Heading, Form, TextArea, TextInput, Anchor } from 'grommet'

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
  return <TextArea placeholder='Message' rows='5' value={value} onChange={event => setValue(event.target.value)} />
}

export const SupportClient = () => (
  <Box fill align='center' gap='medium'>
    <Heading>Client Support</Heading>
    <Box basis='xsmall' direction='row' gap='medium' pad={{ top: 'large' }}>
      <Heading level='3' margin='none'>
        Phone:
      </Heading>
      <Anchor href='tel:1-408-555-5555'>+1 408 555 5555</Anchor>
    </Box>
    <Heading level='3' margin='none'>
      or
    </Heading>
    <Box basis='3/4'>
      <Heading level='3'>Message:</Heading>
      <Form>
        <Box gap='medium'>
          <Box>{FormTextInput()}</Box>
          <Box>{FormTextArea()}</Box>
        </Box>
        <Button type='submit' primary label='Submit' href='#' margin={{ top: 'medium' }} />
      </Form>
    </Box>
  </Box>
)
