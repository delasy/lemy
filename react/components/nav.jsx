import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Nav = (props) => {
  const { children, className, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-nav')

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

Nav.defaultProps = {
  children: null,
  className: '',
  tag: 'ul'
}

Nav.displayName = 'Nav'

Nav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType
}

export default Nav
