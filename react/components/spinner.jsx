import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Spinner = (props) => {
  const { className, color, size, style, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-spinner', `ldc-spinner--${color}`)

  return (
    <Tag
      {...other}
      className={classes}
      role='status'
      style={{
        ...style,
        height: `${size}px`,
        width: `${size}px`
      }}
    />
  )
}

Spinner.defaultProps = {
  className: '',
  color: 'black',
  size: 24,
  style: {},
  tag: 'div'
}

Spinner.displayName = 'Spinner'

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  style: PropTypes.object,
  tag: PropTypes.elementType
}

export default Spinner
