import React from 'react'

import { Col, Row } from '../index'

export const Default = (args) => {
  return (
    <Row {...args}>
      <Col>
        Content
      </Col>
      <Col>
        Content
      </Col>
      <Col>
        Content
      </Col>
    </Row>
  )
}

export default {
  component: Row,
  title: 'Components/Layout'
}
