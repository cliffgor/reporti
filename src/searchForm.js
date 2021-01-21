import { Col, Form } from 'react-bootstrap'

import React from 'react'

export default function SearchForm({ params, onParamChange  }) {
    return (
       <Form className="mb-4">
           <Form.Row className="align-items-end">
           <Form.Group as={Col}>
          <Form.Label>Repositorie Name</Form.Label>
          <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Repositorie Language</Form.Label>
          <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
        </Form.Group>
       
           </Form.Row>
       </Form>
    )
}