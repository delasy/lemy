import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Radio = (props) => {
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

  const classes = classnames(className, 'ldc-radio', `ldc-radio--${skin}`)

  return (
    <Tag className={classes}>
      <div className='ldc-radio__wrapper'>
        <input
          {...other}
          checked={value}
          className='ldc-radio__input'
          disabled={disabled}
          id={id || null}
          onChange={handleChange}
          type='radio'
        />
        <div className='ldc-radio__circle-outer'>
          <span className='ldc-radio__circle-inner' />
        </div>
      </div>
      {label && (
        <label className='ldc-radio__label' htmlFor={id}>
          {label}
        </label>
      )}
    </Tag>
  )
}

Radio.defaultProps = {
  className: '',
  disabled: false,
  label: null,
  skin: 'black',
  tag: 'div'
}

Radio.displayName = 'Radio'

Radio.propTypes = {
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

export default Radio
