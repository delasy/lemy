import React from 'react'

import { Link } from '../index'

export const Default = (args) => {
  return (
    <Link {...args} />
  )
}

Default.args = {
  children: 'Anchor link',
  href: '#'
}

export default {
  component: Link,
  title: 'Components/Link'
}
