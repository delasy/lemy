import React from 'react'

import { Icon } from '../index'

export const Default = (args) => {
  return (
    <Icon {...args} />
  )
}

Default.args = {
  name: 'face'
}

export default {
  component: Icon,
  title: 'Components/Icon'
}
