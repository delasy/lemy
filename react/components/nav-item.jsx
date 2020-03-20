import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const NavItem = (props) => {
  const { children, className, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-nav-item')

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

NavItem.defaultProps = {
  children: null,
  className: '',
  tag: 'li'
}

NavItem.displayName = 'NavItem'

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType
}

export default NavItem
