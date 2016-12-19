const React = require('react');
import Card from './Card';
import Data from '../base/Dataholder';
import Register from './register';

var JCardList = React.createClass({
	getInitialState:function(){
		return {
				cards:[],
				id:3
			};
	},
	pushUser:function(_newObj){
		console.log(_newObj);
		//this.props.onAdd({name:this.state.username, email:this.state.email });
		var cards = this.state.cards;
		cards.push(_newObj);
		this.setState({cards});
	},
	addMore:function(){
			this.state.id++;
			Data.increment();
			//this.state.cards.push();
			var name = "Niraj";
			var id = this.state.id;

			var cards = this.state.cards;
			cards.push({name,id});
			this.setState({cards});
			console.log(this.state.cards);
			console.log("pushing new one");
	},
	render:function(){
		return (
				<div className="container">
					<Register addCard={this.pushUser}/>
					{this.state.cards.map((card)=>{
						return <Card key={card.id} id={card.id} email={card.email} name={card.name} class="col-md-3"></Card>
					})}
					<button className="hide" onClick={this.addMore}>Add + </button>
				
				</div>
		)
	}
});
export default JCardList;