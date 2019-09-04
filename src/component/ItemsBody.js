import React, { Component } from 'react'
import ListItem from './ListItem';
import ListItems from './ListItems'
import axios from 'axios'
import _ from 'lodash'


class ItemsBody extends Component{
	constructor(props){
		super(props)
		this.state = {
			loading : true,
			todos : {}
		}
	}

	componentDidMount(){
		axios.get('/api/list').then(response =>{
		this.setState({
			loading: false,
			todos :response.data
		})
		console.log(response.data)
			
		})
	}
	render(){
		if(this.state.loading === true){
			return (
				<h1>Loading...</h1>
			)
		}
		return(
			<div>
			<ListItems>
			{this.renderTodos()}
		</ListItems>

		</div>
		)
	}
	
	renderTodos(){
		return _.map(this.state.todos, todo => {
			return (

				<ListItem key = {todo.id} title={todo.text} isDone={todo.completed} id={todo.id}/>
				)
		})
	}
}




export default ItemsBody;
