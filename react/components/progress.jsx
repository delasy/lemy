import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Progress = (props) => {
  const { className, color, tag: Tag, value, ...other } = props

  const classes = classnames(className, 'ldc-progress', {
    [`ldc-progress--${color}`]: true
  })

  return (
    <Tag {...other} className={classes} role='progressbar'>
      <span className='ldc-progress__value' style={{ width: `${value}%` }} />
    </Tag>
  )
}

Progress.defaultProps = {
  className: '',
  color: 'primary',
  tag: 'div',
  value: 0
}

Progress.displayName = 'Progress'

Progress.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  tag: PropTypes.elementType,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Progress
