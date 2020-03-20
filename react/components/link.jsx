import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = (props) => {
  const {
    children,
    className,
    color,
    href,
    rel,
    tag: Tag,
    target,
    ...other
  } = props

  const classes = classnames(className, 'ldc-link', `text-${color}`)
  const relAttr = new Set((rel || '').split(' '))

  if (target === '_blank') {
    relAttr.add('noopener')
    relAttr.add('noreferrer')
  }

  return (
    <Tag
      {...other}
      className={classes}
      href={href || null}
      rel={relAttr.size === 0 ? null : [...relAttr].join(' ') || null}
      target={target || null}
    >
      {children}
    </Tag>
  )
}

Link.defaultProps = {
  children: null,
  className: '',
  color: 'primary',
  tag: 'a'
}

Link.displayName = 'Link'

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  href: PropTypes.string,
  rel: PropTypes.string,
  tag: PropTypes.elementType,
  target: PropTypes.string
}

export default Link
