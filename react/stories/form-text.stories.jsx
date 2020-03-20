import React from 'react'

import { FormText } from '../index'

export const Default = (args) => {
  return (
    <FormText {...args} />
  )
}

Default.args = {
  children: 'Type anything...'
}

export default {
  component: FormText,
  title: 'Components/FormText'
}
