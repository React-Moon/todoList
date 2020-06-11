import React from 'react'
import ButtonCustom from '../template/buttonCustom'
import { Table } from 'react-bootstrap'

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
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Descrição</th>
                <th className='tableActions'>Ações</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </Table>
    )
}