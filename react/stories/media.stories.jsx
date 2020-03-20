import React from 'react'

import { Media } from '../index'

export const Default = (args) => {
  return (
    <div style={{ width: '400px' }}>
      <Media {...args} />
    </div>
  )
}

Default.args = {
  alt: 'Media asset',
  src: 'https://picsum.photos/300/200'
}

export default {
  component: Media,
  title: 'Components/Media'
}
