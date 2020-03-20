import React from 'react'

import { Select } from '../index'

export const Default = (args) => {
  return (
    <Select {...args} />
  )
}

Default.args = {
  children: (
    <>
      <option value='1'>Option 1</option>
      <option value='2'>Option 2</option>
      <option value='3'>Option 3</option>
    </>
  ),
  placeholder: 'Select option'
}

Default.argTypes = {
  children: {
    control: {
      disable: true
    }
  }
}

export default {
  component: Select,
  title: 'Components/Select'
}
