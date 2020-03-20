import React from 'react'

import { List, ListItem } from '../index'

export const Default = (args) => {
  return (
    <List {...args}>
      <ListItem
        color='secondary'
        lineOne='Text Item'
      />
      <ListItem
        href='#'
        lineOne='Link Item'
        tag='a'
      />
      <ListItem
        color='black'
        href='#'
        lineOne='Text Item'
        lineTwo='Text line two'
        tag='a'
      />
    </List>
  )
}

export default {
  component: List,
  title: 'Components/List'
}
