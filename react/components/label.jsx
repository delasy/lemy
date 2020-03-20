import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Label = (props) => {
  const { children, className, color, htmlFor, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-label', `text-${color}`)

  return (
    <Tag {...other} className={classes} htmlFor={htmlFor || null}>
      {children}
    </Tag>
  )
}

Label.defaultProps = {
  children: null,
  className: '',
  color: 'black',
  tag: 'label'
}

Label.displayName = 'Label'

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  htmlFor: PropTypes.string,
  tag: PropTypes.elementType
}

export default Label
