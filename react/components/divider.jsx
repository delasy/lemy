import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Divider = (props) => {
  const { className, color, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-divider', `ldc-divider--${color}`)

  return (
    <Tag {...other} className={classes} />
  )
}

Divider.defaultProps = {
  className: '',
  color: 'black',
  tag: 'hr'
}

Divider.displayName = 'Divider'

Divider.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  tag: PropTypes.elementType
}

export default Divider
