import React from 'react';
import JCardList from '../home/CardList';
import { Form, FormField, FormInput,Button, Checkbox } from 'elemental' 

var Register = React.createClass({
    getInitialState: function() {
        return {
            gists: []
            ,email:"neerozoe@gmail.commands"
            ,name:"fdsfsd"
            ,id:10
        };
    }
    ,onSubmit(e){
    	e.preventDefault();
    	this.props.addCard({id:this.state.id++, email:this.state.email, name:this.state.name });
        this.setState({name: ""});
        this.setState({email: ""});
        this.props.editData.name = "";
        this.props.editData.email = "";

    	return false;
    }
    ,handleChange: function(event) {
    	switch(event.target.id){
    		case 'email':
    			this.setState({email: event.target.value});
    			break;
    		case 'name':
    			this.setState({name: event.target.value});
    			break;
    	}
  	}
    ,checkEditData:function(){
        this.setState({name : this.props.editData.name ,email :this.props.editData.email});
    }
    ,componentDidMount:function(){
       this.checkEditData();
    }
    ,componentWillUpdate:function( nextProps,  nextState){
       // console.log('componentWillUpdate')
    }
    ,componentDidUpdate:function( nextProps,  nextState){
       // console.log('componentDidUpdate')

    }
    ,componentWillReceiveProps:function(nextProps){
         // console.log('componentWillReceiveProps')
        this.setState({name : nextProps.editData.name ,email :nextProps.editData.email});
    }
    ,render: function() {
       // console.log("rendering register from");
        return <div className="container">
			         <Form type="horizontal" onSubmit={this.onSubmit}>
						<FormField label="Email address" htmlFor="horizontal-form-input-email">
							<FormInput type="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} id="email" name="horizontal-form-input-email" />
						</FormField>
						<FormField label="Name" htmlFor="horizontal-form-input-password">
							<FormInput type="text"  value={this.state.name}  placeholder="Name" onChange={this.handleChange} id="name" name="horizontal-form-input-password" />
						</FormField>
						<FormField offsetAbsentLabel>
							<Button submit>Submit</Button>
						</FormField>
					</Form>
				</div>
    }
});
module.exports = Register;