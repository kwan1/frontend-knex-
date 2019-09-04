import React from 'react'

const ListItems = ({children}) =>{
	return(
		<ul className="list-group">
			{children}
		</ul>
	)

}

/*
<div>
COMPONENTS HERE
<ListItems />
<ListItem />
<ListItem />
<ListItem />
</div>
*/

export default ListItems