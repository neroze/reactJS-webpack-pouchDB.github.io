import React from 'react';
import JCardList from '../home/CardList';
import { Form, FormField, FormInput,Button, Checkbox } from 'elemental' 

var Register = React.createClass({
    getInitialState: function() {
        return {
            gists: []
            ,email:""
            ,name:""
            ,id:10
        };
    }
    ,onSubmit(e){
    	e.preventDefault();
    	//alert("submitting");
    	this.props.addCard({id:this.state.id++, email:this.state.email, name:this.state.name });
    	return false;
    }
    ,handleChange: function(event) {
    	console.log(event.target.id);
    	// console.log(JCardList.state);
    	switch(event.target.id){
    		case 'email':
    			this.setState({email: event.target.value});
    			break;
    		case 'name':
    			this.setState({name: event.target.value});
    			break;
    	}
  	}
    ,render: function() {
        return <div className="container">
	        			 <Form type="horizontal" onSubmit={this.onSubmit}>
									<FormField label="Email address" htmlFor="horizontal-form-input-email">
										<FormInput type="text" placeholder="Email" onChange={this.handleChange} id="email" name="horizontal-form-input-email" />
										{this.state.email}
									</FormField>
									<FormField label="Name" htmlFor="horizontal-form-input-password">
										<FormInput type="text" placeholder="Name" onChange={this.handleChange} id="name" name="horizontal-form-input-password" />
										{this.state.password}
									</FormField>
									<FormField offsetAbsentLabel>
										<Button submit>Submit</Button>
									</FormField>
								</Form>
							</div>
    }
});
module.exports = Register;
//export default GistBox;