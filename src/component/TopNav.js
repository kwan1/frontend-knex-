import React from 'react'
import {Link } from 'react-router-dom'
/*
() => {}
function() {}
THEY ARE THE SAME
*/

const TopNav = () =>{
	return (
		<div>
		<Link to="/" className="navbar navbar-dark bg-dark mb-4">
   <a className="navbar-brand" href="http://localhost:8000/api/list">Todo List
   </a>
	</Link>
	<div className = 'navbar fixed-bottom'>
	<Link to ="/new" className="btn btn-primary w-100 p-3">Add new todo</Link>
	</div>
</div>
	)
}

export default TopNav