const React = require('react');
import Card from './Card';
import Data from '../base/Dataholder';
import Register from './register';
var _ = require('lodash');
var PouchDB = require('pouchdb');
var db = new PouchDB('nameCards', {
    adapter: 'websql'
});
window.db = db;

var JCardList = React.createClass({
            getInitialState: function() {
                return {
                    cards: [],
                    id: 3,
                    editData: {
                        name: "",
                        email: ""
                    }
                };
            },
            save_new_card: function(_newObj) {
                _newObj._id = _newObj.email;
                db.put(_newObj).then((response) => {
                    var cards = this.state.cards;
                    cards.push(_newObj);
                    this.setState({
                        cards
                    });
                }).catch((err) => {
                    console.log(err);
                });
            },
            update_card_detail: function(_obj, doc) {
                var cards = this.state.cards;
                // saveing to pouchDB
                db.put({
                    _id: doc.email,
                    _rev: doc._rev,
                    name: _obj.name,
                    email: doc.email
                }).then((resp) => {

                    // updating state
                    var index = _.findIndex(cards, {
                        "_id": doc.email
                    });
                    var card = cards[index];
                    card.name = _obj.name;
                    cards[index] = card;
                    this.setState({
                        cards
                    });

                }).catch((err) => {
                    console.log(err)
                });
            },
            save_if_user_do_not_exists: function(_obj) {
                db.get(_obj.email).then((doc) => {
                    this.update_card_detail(_obj, doc);
                }).catch((err) => {
                    this.save_new_card(_obj)
                });
            },
            pushUser: function(_newObj) {
                _newObj._id = _newObj.email;
                this.save_if_user_do_not_exists(_newObj);
            },
            addMore: function() {
                this.state.id++;
                Data.increment();

                var name = "Niraj";
                var id = this.state.id;

                var cards = this.state.cards;
                cards.push({
                    name,
                    id
                });
                this.setState({
                    cards
                });
            },
            removeCard: function(card) {
            		console.log(card);
                // saveing to pouchDB
                db.get(card).then((doc) => {
                 	var cards = this.state.cards;
                 	var index = _.findIndex(cards, {
                      "_id": doc.email
                  });
                 	cards.splice(index,1);
                  this.setState({
                      cards
                  });
                  setTimeout(function(){
                  	 db.remove(doc);
                  },200);
                 
                }).catch((err) => {
                    console.log(err)
                });
            },
            show_cards: function() {
                db.allDocs({
                    include_docs: true,
                    attachments: true
                }).then((result) => {
                    if (result.total_rows > 0) {
                        var cards = this.state.cards;
                        $.each(result.rows, (index, val) => {
                            console.log(val.doc);
                            cards.push(val.doc)
                            this.setState({
                                cards
                            });
                        })
                    }

                }).catch(function(err) {
                    console.log(err);
                });
            },
            setFormData: function(_obj) {
                var editData = this.state.editData;
                editData.name = _obj.name;
                editData.email = _obj.email;
                this.setState({
                    editData
                });
            },
            componentDidMount: function() {
                this.show_cards();
            }
						,render:function(){
							return (
									<div className="container">
										<Register editData={this.state.editData} addCard={this.pushUser}/>
										{this.state.cards.map((card)=>{
											return <Card key={card.email} id={card.id} onRemove={this.removeCard} email={card.email} onEdit={this.setFormData} name={card.name} class="col-md-3"></Card>
										})}
										<button className="hide" onClick={this.addMore}>Add + </button>
									</div>
							)
						}
});
export default JCardList;