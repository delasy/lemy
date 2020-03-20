import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from './button'
import { DropdownContext } from './dropdown'

const DropdownToggle = (props) => {
  const { children, className, tag: Tag, ...other } = props
  const ctx = useContext(DropdownContext)

  const handleClick = () => {
    ctx.onToggle()
  }

  const classes = classnames(className, 'ldc-dropdown-toggle')

  return (
    <Tag {...other} className={classes} onClick={handleClick}>
      {children}
    </Tag>
  )
}

DropdownToggle.defaultProps = {
  children: null,
  className: '',
  tag: Button
}

DropdownToggle.displayName = 'DropdownToggle'

DropdownToggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType
}

export default DropdownToggle
