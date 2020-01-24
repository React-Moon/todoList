import React from 'react'
import If from './if'

export default props => (
    // Se não houver o props hide retorna o filho(Children) do If
    <If teste={!props.hide} >
        <button className={'btn btn-'+props.style} onclick={props.onclick} >
            <i className={'fa fa-'+ props.icon} ></i>
        </button>
    </If>    
)