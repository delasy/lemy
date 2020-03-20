import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const FormText = (props) => {
  const { children, className, color, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-form-text', `text-${color}`)

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

FormText.defaultProps = {
  children: null,
  className: '',
  color: 'black',
  tag: 'div'
}

FormText.displayName = 'FormText'

FormText.propTypes = {
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

export default FormText
