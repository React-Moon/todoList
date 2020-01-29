import React, { Component } from 'react'
import axios from 'axios'

import TodoForm from './todoForm'
import TodoList from './todoList'
import PageHeader from '../template/pageHeader'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    // Faz a referenciação da class Todo pelo this
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    // e - evento, Target referesse ao input, e value ao valor do input
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description =this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tasks ' small="of the day" />
                <TodoForm  description={this.state.description}
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                        tes={this.state.description} />
                <TodoList />
            </div>
        )
    }
}