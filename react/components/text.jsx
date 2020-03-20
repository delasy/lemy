import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const variants = {
  h1: {
    name: 'headline1',
    tag: 'h1'
  },
  h2: {
    name: 'headline2',
    tag: 'h2'
  },
  h3: {
    name: 'headline3',
    tag: 'h3'
  },
  h4: {
    name: 'headline4',
    tag: 'h4'
  },
  h5: {
    name: 'headline5',
    tag: 'h5'
  },
  h6: {
    name: 'headline6',
    tag: 'h6'
  },
  s1: {
    name: 'subtitle1',
    tag: 'h6'
  },
  s2: {
    name: 'subtitle2',
    tag: 'h6'
  },
  b1: {
    name: 'body1',
    tag: 'p'
  },
  b2: {
    name: 'body2',
    tag: 'p'
  }
}

const Text = (props) => {
  const { children, className, color, tag, variant, ...other } = props
  const Tag = tag ?? variants[variant].tag

  const classes = classnames(className, 'ldc-text', {
    [`ldc-text--${variants[variant].name} `]: true,
    [`text-${color}`]: true
  })

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

Text.defaultProps = {
  children: null,
  className: '',
  color: 'black',
  tag: null,
  variant: 'b1'
}

Text.displayName = 'Text'

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  tag: PropTypes.elementType,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    's1',
    's2',
    'b1',
    'b2'
  ])
}

export default Text
