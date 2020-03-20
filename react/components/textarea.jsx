import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Textarea = (props) => {
  const {
    className,
    cols,
    disabled,
    id,
    onChange,
    placeholder,
    readOnly,
    rows,
    skin,
    value,
    ...other
  } = props

  const handleChange = (e) => {
    onChange && onChange(e.target.value)
  }

  const classes = classnames(className, 'ldc-textarea', {
    [`ldc-textarea--${skin}`]: true
  })

  return (
    <textarea
      {...other}
      className={classes}
      cols={cols}
      disabled={disabled}
      id={id}
      onChange={handleChange}
      readOnly={readOnly}
      rows={rows}
      placeholder={placeholder || null}
      value={value}
    />
  )
}

Textarea.defaultProps = {
  className: '',
  disabled: false,
  placeholder: '',
  readOnly: false,
  rows: 5,
  skin: 'black'
}

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
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

export default Textarea
