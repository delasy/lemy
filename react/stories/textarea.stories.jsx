import React from 'react'

import { Textarea } from '../index'

export const Default = (args) => {
  return (
    <Textarea {...args} />
  )
}

export default {
  component: Textarea,
  title: 'Components/Textarea'
}
