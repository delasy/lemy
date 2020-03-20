import React from 'react'

import { Link, Nav, NavItem, Navbar } from '../index'

export const Default = (args) => {
  return (
    <Navbar {...args}>
      <Nav>
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
    </Navbar>
  )
}

export default {
  component: Navbar,
  title: 'Components/Navbar'
}
