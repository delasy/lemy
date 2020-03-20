import React from 'react'

import { Button } from '../index'

export const Default = (args) => {
  return (
    <Button {...args} />
  )
}

Default.args = {
  children: 'Button'
}

export default {
  component: Button,
  title: 'Components/Button'
}
