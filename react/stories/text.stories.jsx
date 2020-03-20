import React from 'react'

import { Text } from '../index'

export const Default = (args) => {
  return (
    <Text {...args} />
  )
}

Default.args = {
  children: 'Type anything...'
}

export default {
  component: Text,
  title: 'Components/Text'
}
