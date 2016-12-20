const React = require('react');
import { Card } from 'elemental' 

var JCard = React.createClass({
	edit:function(e){
		e.preventDefault();
		this.props.onEdit({name:this.props.name, email:this.props.email});
	}
	,removeCard:function(){
		this.props.onRemove(this.props.email)
	}
	,render:function(){
		return (
			<Card id={this.props.id} className="col-md-3">
					{this.props.name} <br/> ( {this.props.email})
					<i className="fa fa-trash-o red float-right" onClick={this.removeCard}></i>
					<i className="fa fa-edit info float-right" onClick={this.edit}></i>
			</Card>
		)
		
	}
});
export default JCard;