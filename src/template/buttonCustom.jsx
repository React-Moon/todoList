import React from 'react'
import If from './if'
import { Button } from 'react-bootstrap'

export default props => {
    
    return(
        <If noHide={!props.done} >
            <Button variant={props.variant} className={`fa fa-${props.icon} ${props.classes}`} 
                    size={props.size} onClick={props.onClick}></Button>
        </If>    
    )
}


                        