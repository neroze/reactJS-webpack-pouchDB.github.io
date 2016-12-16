import React from 'react';
import {render} from 'react-dom';
import JCardList from './home/CardList';

import GistBox from './GistBox';
import SideBar from './home/side_bar';
render(
	<div>
		<SideBar/>
			<div className="card-collection">
			<JCardList/>
		</div>
	</div>
	, document.querySelector("#app"));

// render(<GistBox/>, document.querySelector("#app"));