import React , {Component} from 'react'
import axios from 'axios'
import ToDoCard from './ToDoCard'

class SingleItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			loading : true,
			todo :{}
		}
	}

	UNSAFE_componentWillMount(){
		const id = this.props.match.params.id
		axios.get(`/api/list/${id}`).then((res)=>{
			this.setState({
				loading: false,
				todo: res.data
			})
		})
	}
	render(){
		if(this.state.loading){
			return (
				<h3>Loading...</h3>
			)
		}
		return(
			<div>
			<ToDoCard title = {this.state.todo.text} isDone={this.state.todo.completed} id= {this.state.todo.id}/>
			</div>
			)
		}

	}



export default SingleItem