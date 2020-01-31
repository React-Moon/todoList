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
        this.handleSearch = this.handleSearch.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }
    // e - evento, Target referesse ao input, e value ao valor do input
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/`: ''
        axios.get(`${URL}?sort=-createdAt${search}`)
                .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done:true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            .then(resp => this.refresh(this.state.description))
    }
    
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
   
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description =this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tasks ' small="of the day" />
                <TodoForm  description={this.state.description}
                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                        handleSearch={ this.handleSearch } 
                        handleClear={ this.handleClear}/>
                <TodoList list={this.state.list}
                        handleMarkAsDone={ this.handleMarkAsDone }
                        handleMarkAsPending={ this.handleMarkAsPending }
                        handleRemove={ this.handleRemove }/>
            </div>
        )
    }
}