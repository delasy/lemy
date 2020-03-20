import React from 'react'

import { Container } from '../index'

export const Default = (args) => {
  return (
    <Container {...args} />
  )
}

Default.args = {
  children: 'Type anything...'
}

export default {
  component: Container,
  title: 'Components/Container'
}
