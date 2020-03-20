import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const DialogFooter = (props) => {
  const { children, className, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-dialog-footer')

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

DialogFooter.defaultProps = {
  children: null,
  className: '',
  tag: 'div'
}

DialogFooter.displayName = 'DialogFooter'

DialogFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType
}

export default DialogFooter
