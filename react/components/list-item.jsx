import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ListItem = (props) => {
  const { color, className, lineOne, lineTwo, tag: Tag, ...other } = props

  const classes = classnames(className, 'ldc-list-item', {
    [`ldc-list-item--${color}`]: true
  })

  return (
    <Tag {...other} className={classes}>
      <span className='ldc-list-item__lines'>
        <span className='ldc-list-item__line-one'>{lineOne}</span>
        {lineTwo && (
          <span className='ldc-list-item__line-two'>{lineTwo}</span>
        )}
      </span>
    </Tag>
  )
}

ListItem.defaultProps = {
  className: '',
  color: 'black',
  lineTwo: null,
  tag: 'li'
}

ListItem.displayName = 'ListItem'

ListItem.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  lineOne: PropTypes.node.isRequired,
  lineTwo: PropTypes.node,
  tag: PropTypes.elementType
}

export default ListItem
