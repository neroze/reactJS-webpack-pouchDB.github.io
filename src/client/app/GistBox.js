import GistAddForm from "./GistAddForm";
import Gist from "./Gist";
const React = require('react');
import { Button, Alert, Spinner, Glyph } from 'elemental' 
import { Row, Col, DemoBox,ResponsiveText } from 'elemental' 

var GistBox = React.createClass({
	
	render:function(){
		

		return <div>
							<Row>
								<Col sm="1/3">
									<Spinner size="md" />
								</Col>
								<Col sm="1/3">
									<Glyph icon="thumbsup" />
								</Col>
								<Col sm="1/3">
									<Glyph icon="bell" />
											<ResponsiveText visibleXS="⅓" visibleSM="One Quarter" visibleMD="One Quarter" visibleLG="One Third" />
								</Col>
							</Row>
					</div>
		
	}
});
export default GistBox;