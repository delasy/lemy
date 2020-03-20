import React from 'react'

import { Link, Nav, NavItem } from '../index'

export const Default = (args) => {
  return (
    <Nav {...args}>
      <NavItem href='#1' tag={Link}>
        Link 1
      </NavItem>
      <NavItem href='#2' tag={Link}>
        Link 2
      </NavItem>
      <NavItem href='#3' tag={Link}>
        Link 3
      </NavItem>
    </Nav>
  )
}

export default {
  component: Nav,
  title: 'Components/Nav'
}
