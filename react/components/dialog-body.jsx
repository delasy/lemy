import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const DialogBody = (props) => {
  const { children, className, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-dialog-body')

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

DialogBody.defaultProps = {
  children: null,
  className: '',
  tag: 'div'
}

DialogBody.displayName = 'DialogBody'

DialogBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType
}

export default DialogBody
