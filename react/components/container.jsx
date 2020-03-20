import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Container = (props) => {
  const { children, className, fluid, tag: Tag, ...other } = props

  const classes = classnames(className, {
    'ldc-container': !fluid,
    'ldc-container-fluid': fluid
  })

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

Container.defaultProps = {
  children: null,
  className: '',
  fluid: false,
  tag: 'div'
}

Container.displayName = 'Container'

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  tag: PropTypes.elementType
}

export default Container
