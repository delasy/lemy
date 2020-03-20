import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const DialogHeader = (props) => {
  const { children, className, color, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-dialog-header', `text-${color}`)

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

DialogHeader.defaultProps = {
  children: null,
  className: '',
  color: 'black',
  tag: 'h2'
}

DialogHeader.displayName = 'DialogHeader'

DialogHeader.propTypes = {
  children: PropTypes.node,
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

export default DialogHeader
