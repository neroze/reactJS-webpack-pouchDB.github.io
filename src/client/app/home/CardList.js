const React = require('react');
import Card from './Card';

var JCardList = React.createClass({
	getInitialState:function(){
		return {
				cards:[],
				id:3
			};
	},
	addMore:function(){
			this.state.id++;
			//this.state.cards.push();
			var name = "Niraj";
			var id = this.state.id;

			var cards = this.state.cards.concat({name,id});
			this.setState({cards});
			console.log(this.state.cards);
			console.log("pushing new one");
	},
	render:function(){
		return (
			<div>
				{this.state.cards.map((card)=>{
					return <Card key={card.id} id={card.id} name={card.name} class="col-md-3"></Card>
				})}
				<button onClick={this.addMore}>Add + </button>
			</div>
		)
	}
});
export default JCardList;