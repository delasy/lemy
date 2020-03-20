import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Dialog = (props) => {
  const {
    children,
    className = '',
    disableBackdropClick = false,
    disableEscapeKeyDown = false,
    hideBackdrop = false,
    onClose,
    open,
    title,
    variant = 'simple',
    ...other
  } = props

  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Escape') {
      return
    }

    event.stopPropagation()

    if (!disableEscapeKeyDown && onClose) {
      onClose(event, 'escapeKeyDown')
    }
  }

  return !open ? null : (
    <div
      className={classnames(className, 'ldc-dialog')}
      onKeyDown={handleKeyDown}
      {...other}
    >
      {hideBackdrop ? null : (
        <div
          className='ldc-dialog__backdrop'
          onClick={handleBackdropClick}
        />
      )}
      <div className='ldc-dialog__container'>
        {variant === Dialog.VARIANT.ALERT ? null : (
          <div className='ldc-dialog__container-header'>
            {title}
          </div>
        )}
        <div className='ldc-dialog__container-body'>
          {children}
        </div>
        {variant === Dialog.VARIANT.SIMPLE ? null : (
          <div className='ldc-dialog__container-footer' />
        )}
      </div>
    </div>
  )
}

Dialog.VARIANT = {
  ALERT: 'alert',
  CONFIRMATION: 'confirmation',
  SIMPLE: 'simple',
  SCROLLABLE: 'scrollable'
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  hideBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  variant: PropTypes.oneOf([
    Dialog.VARIANT.ALERT,
    Dialog.VARIANT.CONFIRMATION,
    Dialog.VARIANT.SIMPLE,
    Dialog.VARIANT.SCROLLABLE
  ])
}

export default Dialog
