import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = (props) => {
  const {
    className,
    disabled,
    id,
    onChange,
    placeholder,
    readOnly,
    skin,
    type,
    value,
    ...other
  } = props

  const handleChange = (e) => {
    onChange && onChange(e.target.value)
  }

  const classes = classnames(className, 'ldc-input', `ldc-input--${skin}`)

  return (
    <input
      {...other}
      className={classes}
      disabled={disabled}
      id={id || null}
      onChange={handleChange}
      readOnly={readOnly}
      placeholder={placeholder || null}
      type={type}
      value={value}
    />
  )
}

Input.defaultProps = {
  className: '',
  disabled: false,
  placeholder: '',
  readOnly: false,
  skin: 'black',
  type: 'text'
}

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  skin: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Input
