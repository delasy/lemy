import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Navbar = (props) => {
  const { background, children, className, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-navbar', `bg-${background}`)

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

Navbar.defaultProps = {
  background: 'black',
  children: null,
  className: '',
  tag: 'nav'
}

Navbar.displayName = 'Navbar'

Navbar.propTypes = {
  background: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType
}

export default Navbar
