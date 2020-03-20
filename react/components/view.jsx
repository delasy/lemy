import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const View = (props) => {
  const { background, children, className, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-view', `bg-${background}`)

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

View.defaultProps = {
  background: 'white',
  children: null,
  className: '',
  tag: 'div'
}

View.displayName = 'View'

View.propTypes = {
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

export default View
