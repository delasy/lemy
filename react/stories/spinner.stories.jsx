import React from 'react'

import { Spinner } from '../index'

export const Default = (args) => {
  return (
    <Spinner {...args} />
  )
}

export default {
  component: Spinner,
  title: 'Components/Spinner'
}
