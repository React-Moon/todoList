import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import IconButton from '../template/iconButton'

export default props => (
    <div>
        <p> {props.tes} </p>
        <Container>  
            <Row>
                <Col xs lg='11' >
                    <input type="text" className="form-control" 
                            onChange={props.handleChange}
                            placeholder="Adicione uma tarefa" value={props.description} />
                </Col>    
                <Col xs lg='1'>
                    <IconButton styleButton='primary' icon='plus' 
                                onClick={props.handleAdd}>
                    </IconButton>
                </Col>        
            </Row>

        </Container>
    </div>
)