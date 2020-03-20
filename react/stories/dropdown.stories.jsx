import React from 'react'

import { Dropdown, DropdownMenu, DropdownToggle } from '../index'

export const Default = (args) => {
  return (
    <Dropdown {...args}>
      <DropdownToggle>
        Toggle
      </DropdownToggle>
      <DropdownMenu>
        Menu
      </DropdownMenu>
    </Dropdown>
  )
}

export default {
  component: Dropdown,
  title: 'Components/Dropdown'
}
