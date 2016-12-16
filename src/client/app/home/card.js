const React = require('react');
import { Card } from 'elemental' 

var JCard = React.createClass({
	sayHello:function(){
		alert(this.props.name)
	},
	render:function(){
		return (
			<Card id={this.props.id} onClick={this.sayHello} className="col-md-3">{this.props.name}</Card>
		)
		
	}
});
export default JCard;