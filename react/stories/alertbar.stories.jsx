import React, { useState } from 'react'

import { Alertbar, Button, Form, Input, useAlertbar } from '../index'

export const Default = (args) => {
  const [data, setData] = useState({
    duration: 5000,
    text: 'Alertbar Content'
  })

  const openAlertbar = useAlertbar(args)

  const handleDataChange = (field) => {
    return (val) => {
      setData({ ...data, [field]: val })
    }
  }

  const handleSubmitPrevent = () => {
    openAlertbar(data.text, data.duration)
  }

  return (
    <Form onSubmitPrevent={handleSubmitPrevent}>
      <Input
        onChange={handleDataChange('duration')}
        type='number'
        value={data.duration}
      />
      <Input
        onChange={handleDataChange('text')}
        value={data.text}
      />
      <Button>
        Open
      </Button>
    </Form>
  )
}

export default {
  component: Alertbar,
  title: 'Components/Alertbar'
}
