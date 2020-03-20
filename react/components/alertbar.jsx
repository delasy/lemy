import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

const Alertbar = (props) => {
  const { children, className, skin, tag: Tag, ...other } = props

  const classes = classnames(className, 'ldc-alertbar', {
    [`ldc-alertbar--${skin}`]: true
  })

  return (
    <Tag {...other} className={classes}>
      <div className='ldc-alertbar__content'>
        {children}
      </div>
    </Tag>
  )
}

Alertbar.defaultProps = {
  children: null,
  className: '',
  skin: 'primary',
  tag: 'div'
}

Alertbar.displayName = 'Alertbar'

Alertbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  skin: PropTypes.oneOf([
    'black',
    'error',
    'primary',
    'secondary',
    'white'
  ]),
  tag: PropTypes.elementType
}

export const useAlertbar = (other = []) => {
  const [state, setState] = useState({
    loading: false,
    queue: []
  })

  useEffect(() => {
    if (state.queue.length && !state.loading) {
      setState({
        ...state,
        loading: true
      })

      const item = state.queue[0]
      const container = document.createElement('div')

      const child = (
        <Alertbar {...other}>
          {item.text}
        </Alertbar>
      )

      document.body.appendChild(container)
      ReactDOM.render(child, container)

      window.setTimeout(() => {
        ReactDOM.unmountComponentAtNode(container)
        document.body.removeChild(container)

        setState((state) => {
          return {
            ...state,
            loading: false,
            queue: state.queue.slice(1)
          }
        })
      }, item.duration)
    }
  }, [state])

  return (text, duration = 5000) => {
    const item = {
      duration: duration,
      text: text
    }

    setState({
      ...state,
      queue: [...state.queue, item]
    })
  }
}

export default Alertbar
