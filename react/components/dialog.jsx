import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Dialog = (props) => {
  const {
    background,
    children,
    className,
    disableBackdropClick,
    disableEscapeKeyUp,
    hideBackdrop,
    isOpen,
    onClose,
    tag: Tag,
    ...other
  } = props

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }

    if (!disableBackdropClick && onClose) {
      onClose(e, 'backdropClick')
    }
  }

  const handleDocumentKeyUp = (e) => {
    if (e.key !== 'Escape') {
      return
    }

    e.stopPropagation()

    if (!disableEscapeKeyUp && onClose) {
      onClose(e, 'escapeKeyUp')
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keyup', handleDocumentKeyUp, true)
    }

    return () => {
      if (isOpen) {
        document.removeEventListener('keyup', handleDocumentKeyUp, true)
      }
    }
  }, [isOpen])

  const classes = classnames(className, 'ldc-dialog', {
    [`ldc-dialog--${background}`]: true,
    'ldc-dialog--show': isOpen
  })

  return (
    <Tag {...other} className={classes}>
      {hideBackdrop ? null : (
        <div className='ldc-dialog__backdrop' onClick={handleBackdropClick} />
      )}
      <div className='ldc-dialog__container'>
        <div className='ldc-dialog__wrapper'>
          {children}
        </div>
      </div>
    </Tag>
  )
}

Dialog.defaultProps = {
  background: 'white',
  children: null,
  className: '',
  disableBackdropClick: false,
  disableEscapeKeyUp: false,
  hideBackdrop: false,
  isOpen: false,
  tag: 'div'
}

Dialog.displayName = 'Dialog'

Dialog.propTypes = {
  background: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyUp: PropTypes.bool,
  hideBackdrop: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  tag: PropTypes.elementType
}

export default Dialog
