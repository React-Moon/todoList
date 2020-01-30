import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

export default props => (
    <div>
        <p> {props.tes} </p>
        <Container>  
            <Row>
                <Col xs lg='10' >
                    <input type="text" className="form-control" 
                            onChange={props.handleChange}
                            placeholder="Adicione uma tarefa" value={props.description} />
                </Col>    
                <Col xs lg='2'>
                    <Button variant='primary' className='fa fa-plus btnCustom' 
                            onClick={props.handleAdd}>
                    </Button>
                    <Button variant='info' className='fa fa-search btnCustom' 
                            onClick={props.handleSearch} >
                    </Button>
                </Col>        
            </Row>

        </Container>
    </div>
)