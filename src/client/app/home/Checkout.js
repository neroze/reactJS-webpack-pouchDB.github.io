const React = require('react');
import Data from '../base/Dataholder';

var Checkout = React.createClass({
	logState:function(){
		console.log(Data.getValue());
	},
	render:function(){
		return (
			<div>
				<button onClick={this.logState}>Checkout </button>
			</div>
		)
	}
});
export default Checkout;