import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const List = (props) => {
  const { children, className, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-list')

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  )
}

List.defaultProps = {
  children: null,
  className: '',
  tag: 'ul'
}

List.displayName = 'List'

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType
}

export default List
