import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { DropdownContext } from './dropdown'

const DropdownMenu = (props) => {
  const { children, className, skin, tag: Tag, ...other } = props
  const ctx = useContext(DropdownContext)

  const classes = classnames(className, 'ldc-dropdown-menu', {
    [`ldc-dropdown-menu--${ctx.direction}`]: true,
    [`ldc-dropdown-menu--${skin}`]: true,
    'ldc-dropdown-menu--show': ctx.isOpen
  })

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

DropdownMenu.defaultProps = {
  children: null,
  className: '',
  skin: 'black',
  tag: 'div'
}

DropdownMenu.displayName = 'DropdownMenu'

DropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  skin: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  tag: PropTypes.elementType
}

export default DropdownMenu
