import React from 'react'

import { Container, Row, Col, Button, FormControl, InputGroup } from 'react-bootstrap'


export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    
    return (  
        <div role='form' className='todoForm'>
            <Container>  
                <Row>
                    <Col xs lg='10' >
                        <InputGroup>
                            <FormControl type="text" className="form-control" 
                                    onChange={props.handleChange}
                                    onKeyUp={keyHandler}
                                    placeholder="Adicione uma tarefa" value={props.description} />
                        </InputGroup>        
                                
                    </Col>    
                    <Col xs lg='2'>
                        <Button variant='primary' className='fa fa-plus btnCustom' 
                                onClick={props.handleAdd}>
                        </Button>
                        <Button variant='info' className='fa fa-search btnCustom' 
                                onClick={props.handleSearch} >
                        </Button>
                        <Button variant='dark' className='fa fa-close btnCustom' 
                                onClick={props.handleClear} >
                        </Button>
                    </Col>        
                </Row>
            </Container>
        </div>
)}