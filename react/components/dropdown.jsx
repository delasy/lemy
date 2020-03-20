import React, { createContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const DropdownContext = createContext(null)

const Dropdown = (props) => {
  const { children, className, direction, tag: Tag, ...other } = props
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleDocumentClick = (e) => {
    if (
      containerRef.current &&
      containerRef.current.contains(e.target) &&
      containerRef.current !== e.target
    ) {
      return
    }

    handleToggle()
  }

  const ctx = {
    direction: direction,
    isOpen: isOpen,
    onToggle: handleToggle
  }

  useEffect(() => {
    if (ctx.isOpen) {
      ['click', 'touchstart'].forEach((eventName) => {
        document.addEventListener(eventName, handleDocumentClick, true)
      })
    }

    return () => {
      if (ctx.isOpen) {
        ['click', 'touchstart'].forEach((eventName) => {
          document.removeEventListener(eventName, handleDocumentClick, true)
        })
      }
    }
  }, [ctx.isOpen])

  const classes = classnames(className, 'ldc-dropdown')

  return (
    <DropdownContext.Provider value={ctx}>
      <Tag {...other} className={classes} ref={containerRef}>
        {children}
      </Tag>
    </DropdownContext.Provider>
  )
}

Dropdown.defaultProps = {
  children: null,
  className: '',
  direction: 'down-right',
  tag: 'div'
}

Dropdown.displayName = 'Dropdown'

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf([
    'down-center',
    'down-left',
    'down-right',
    'left-center',
    'left-down',
    'left-up',
    'right-center',
    'right-down',
    'right-up',
    'up-center',
    'up-left',
    'up-right'
  ]),
  tag: PropTypes.elementType
}

export default Dropdown
