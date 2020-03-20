import React from 'react'

import { View } from '../index'

export const Default = (args) => {
  return (
    <View {...args} />
  )
}

Default.args = {
  className: 'p-5',
  children: 'Type anything...'
}

export default {
  component: View,
  title: 'Components/View'
}
