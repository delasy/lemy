import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Icon = (props) => {
  const { className, color, name, size, style, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-icon', `text-${color}`)

  return (
    <Tag
      {...other}
      className={classes}
      style={{
        ...style,
        fontSize: `${size}px`
      }}
    >
      {name}
    </Tag>
  )
}

Icon.defaultProps = {
  className: '',
  color: 'black',
  size: 24,
  style: {},
  tag: 'span'
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  style: PropTypes.object,
  tag: PropTypes.elementType
}

export default Icon
