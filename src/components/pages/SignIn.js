import React from 'react'

import { Box, Button, Form, FormField, Heading, Text } from 'grommet'

export const SignIn = () => (
  <Box fill align='center' justify='center'>
    <Heading>Sign In</Heading>
    <Form>
      <FormField name='phone' label='Phone' placeholder='555 555 555 555' />
      <FormField name='password' label='Password' placeholder='************' />
      <Button type='submit' primary label='Submit' href='/success' />
    </Form>
    <Text margin='medium'>
      <strong>or</strong>
    </Text>
    <Button label='Log In via Social Network' href='/success' margin='small' />
  </Box>
)
