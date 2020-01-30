import React from 'react'
import ButtonCustom from '../template/buttonCustom'

export default props => {

    const renderRows = () => {
            const list = props.list || []
            return list.map(todo =>(
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''} >{todo.description}</td>
                    <td>
                        <ButtonCustom variant='success' icon='check' classes='btnCustom' size='sm'
                                onClick={() => props.handleMarkAsDone(todo)} done={todo.done} ></ButtonCustom>
                        <ButtonCustom variant='warning' icon='undo' classes='btnCustom' size='sm' 
                                onClick={() => props.handleMarkAsPending(todo)} done={!todo.done} ></ButtonCustom>
                        <ButtonCustom variant='danger' icon='trash' classes='btnCustom' size='sm'
                                onClick={() => props.handleRemove(todo)} done={!todo.done} ></ButtonCustom>
                    </td>
                </tr>
            ))
    }

    return (
    <table className='table'>
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
    )
}