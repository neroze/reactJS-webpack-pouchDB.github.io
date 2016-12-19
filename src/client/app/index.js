import React from 'react';
import {render} from 'react-dom';
import JCardList from './home/CardList';
import Checkout from './home/Checkout';

import GistBox from './GistBox';
import SideBar from './home/side_bar';
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