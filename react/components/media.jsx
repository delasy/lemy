import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Media = (props) => {
  const { alt, className, src, tag: Tag, ...other } = props
  const classes = classnames(className, 'ldc-media')

  return (
    <Tag className={classes}>
      <div className='ldc-media__wrapper'>
        <img
          {...other}
          alt={alt}
          className='ldc-media__asset'
          src={src}
        />
      </div>
      <div className='ldc-media__overlay' />
    </Tag>
  )
}

Media.defaultProps = {
  className: '',
  tag: 'div'
}

Media.displayName = 'Media'

Media.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.any.isRequired,
  tag: PropTypes.elementType
}

export default Media
