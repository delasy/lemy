import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Col = (props) => {
  const { children, className, tag: Tag, ...other } = props
  const spans = []

  ;['xxl', 'xl', 'lg', 'md', 'sm', 'xs'].forEach((breakpoint) => {
    const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`
    const span = other[breakpoint]

    delete other[breakpoint]

    if (span) {
      const postfix = span === true ? '' : `-${span}`
      spans.push(`ldc-col${infix}${postfix}`)
    }
  })

  if (!spans.length) {
    spans.push('ldc-col')
  }

  const classes = classnames(className, ...spans)

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

Col.defaultProps = {
  children: null,
  className: '',
  tag: 'div'
}

Col.displayName = 'Col'

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType,

  xs: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto'])
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto'])
  ]),
  md: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto'])
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto'])
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto'])
  ]),
  xxl: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto'])
  ])
}

export default Col
