import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Checkbox = (props) => {
  const {
    className,
    disabled,
    id,
    label,
    onChange,
    skin,
    tag: Tag,
    value,
    ...other
  } = props

  const handleChange = (e) => {
    onChange && onChange(e.target.checked)
  }

  const classes = classnames(className, 'ldc-checkbox', {
    [`ldc-checkbox--${skin}`]: true
  })

  return (
    <Tag className={classes}>
      <div className='ldc-checkbox__wrapper'>
        <input
          {...other}
          checked={value}
          className='ldc-checkbox__input'
          disabled={disabled}
          id={id || null}
          onChange={handleChange}
          type='checkbox'
        />
        <div className='ldc-checkbox__background'>
          <svg className='ldc-checkbox__checkmark' viewBox='0 0 24 24'>
            <path
              d='M1.73,12.91 8.1,19.28 22.79,4.59'
              fill='none'
              stroke='currentColor'
              strokeDasharray='30'
              strokeWidth='3px'
            />
          </svg>
        </div>
      </div>
      {label && (
        <label className='ldc-checkbox__label' htmlFor={id}>
          {label}
        </label>
      )}
    </Tag>
  )
}

Checkbox.defaultProps = {
  className: '',
  disabled: false,
  label: null,
  skin: 'black',
  tag: 'div'
}

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.node,
  onChange: PropTypes.func,
  skin: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  tag: PropTypes.elementType,
  value: PropTypes.bool
}

export default Checkbox
