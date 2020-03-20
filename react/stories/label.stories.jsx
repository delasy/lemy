import React from 'react'

import { Label } from '../index'

export const Default = (args) => {
  return (
    <Label {...args} />
  )
}

Default.args = {
  children: 'Label'
}

export default {
  component: Label,
  title: 'Components/Label'
}
