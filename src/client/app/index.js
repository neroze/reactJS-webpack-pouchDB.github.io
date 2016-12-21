import React from 'react';
import {render} from 'react-dom';
import JCardList from './home/CardList';
import Register from './home/register';

render(
	<div>
			<div className="card-collection">
			<JCardList/>

		</div>
	</div>
	, document.querySelector("#app"));


	// <SideBar/>
	// <Checkout/>
			
// render(<GistBox/>, document.querySelector("#app"));