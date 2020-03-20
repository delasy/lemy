import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Row = (props) => {
  const { children, className, noGutters, tag: Tag, ...other } = props

  const classes = classnames(className, 'ldc-row', {
    'ldc-row--no-gutters': noGutters
  })

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

Row.defaultProps = {
  children: null,
  className: '',
  noGutters: false,
  tag: 'div'
}

Row.displayName = 'Row'

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noGutters: PropTypes.bool,
  tag: PropTypes.elementType
}

export default Row
