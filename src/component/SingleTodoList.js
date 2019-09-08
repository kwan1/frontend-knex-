import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
const SingleTodoList = ({title, isDone,onEdit,id,history}) =>{
	return(
		<div className={`card ${isDone ? 'bg-success' : 'bg-danger'} text-white`}>
		<div className = "card-block">
		<div className = "card-title">	
		<h4>{title}</h4>
		</div>
			<div className="card-text"> 
			{isDone ? "This has been completed" : "Has yet to be finished"}		
			</div>
			<div className="d-flex justify-content-between align-items-end mt-5">
			<button className="bt btn-link text-black " onClick={()=>{window.confirm("Are you sure?") &&
				axios.delete(`/api/list/${id}`).then(()=>{
				history.push('/')

			})

			}}>Delete</button>

			<button className="bt btn-link text-black" onClick={onEdit}>Edit</button>
			</div>
		</div>
	</div>

	)
}
  
export default withRouter(SingleTodoList)


//alert("Are you sure to delete this task?")