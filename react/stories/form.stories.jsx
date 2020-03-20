import React from 'react'

import { Form } from '../index'

export const Default = (args) => {
  return (
    <Form {...args} />
  )
}

Default.args = {
  children: 'Type anything...'
}

export default {
  component: Form,
  title: 'Components/Form'
}
