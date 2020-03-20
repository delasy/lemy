import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = (props) => {
  const {
    children,
    className,
    disabled,
    onClick,
    size,
    skin,
    tag: Tag,
    ...other
  } = props

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  const classes = classnames(className, 'ldc-button', {
    [`ldc-button--${size}`]: true,
    [`ldc-button--${skin}`]: true
  })

  return (
    <Tag
      {...other}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Tag>
  )
}

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  size: 'md',
  skin: 'black',
  tag: 'button'
}

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  skin: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  tag: PropTypes.elementType
}

export default Button
