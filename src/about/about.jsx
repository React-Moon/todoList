import React from 'react'
import PageHeader from '../template/pageHeader'
import { Jumbotron, Container } from 'react-bootstrap'

export default props => (
    <div>
        <Jumbotron className="text-center">
            <Container>
                <PageHeader name='About' small='us' />
                <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            </Container>
        </Jumbotron>    
    </div>
    
)