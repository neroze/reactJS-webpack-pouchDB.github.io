const React = require('react');
import { Button, Alert, Spinner, Glyph } from 'elemental' 
import { Row, Col, DemoBox,ResponsiveText } from 'elemental' 

var SideBar = React.createClass({
	render:function(){
		return 	<div className="side-bar">
							<div className="logo fa fa-tree"></div>
						</div>
	}
});
export default SideBar;