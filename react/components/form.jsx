import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Form = (props) => {
  const {
    children,
    className,
    onSubmit,
    onSubmitPrevent,
    tag: Tag,
    ...other
  } = props

  const classes = classnames(className, 'ldc-form')

  const handleSubmit = (e) => {
    if (onSubmit) {
      onSubmit(e)
    } else if (onSubmitPrevent) {
      e.preventDefault()
      onSubmitPrevent(e)
    }
  }

  return (
    <Tag {...other} className={classes} onSubmit={handleSubmit}>
      {children}
    </Tag>
  )
}

Form.defaultProps = {
  children: null,
  className: '',
  tag: 'form'
}

Form.displayName = 'Form'

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onSubmitPrevent: PropTypes.func,
  tag: PropTypes.elementType
}

export default Form
