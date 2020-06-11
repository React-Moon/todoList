import React from 'react'
import { Card } from 'react-bootstrap'

export default props => (
    <Card.Header>
        <Card.Title>{props.name} <span className="mb-2 text-muted">{props.small}</span></Card.Title>
    </Card.Header >
)