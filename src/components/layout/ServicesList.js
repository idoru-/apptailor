import React, { Component } from 'react'

import { Box, Button, InfiniteScroll, Text } from 'grommet'

export default class ServicesList extends Component {
  render() {
    return (
      <Box height='medium' width='large' overflow='auto'>
        <InfiniteScroll items={[1, 2, 3, 4, 5, 6, 7]}>
          {item => (
            <Box flex={false} pad='medium' background={`dark-${(item % 3) + 1}`} key={item.toString()}>
              <Text>{item}</Text>
              <Button>
                <strong>+</strong>
              </Button>
            </Box>
          )}
        </InfiniteScroll>
      </Box>
    )
  }
}
