import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Select = (props) => {
  const {
    children,
    className,
    disabled,
    id,
    onChange,
    placeholder,
    skin,
    value,
    ...other
  } = props

  const handleChange = (e) => {
    onChange && onChange(e.target.value || null)
  }

  const classes = classnames(className, 'ldc-select', `ldc-select--${skin}`)

  return (
    <select
      {...other}
      className={classes}
      disabled={disabled}
      id={id || null}
      onChange={handleChange}
      value={value}
    >
      {placeholder && (
        <option disabled value=''>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  )
}

Select.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  placeholder: '',
  skin: 'black'
}

Select.displayName = 'Select'

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  skin: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Select
