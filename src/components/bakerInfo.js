import React from 'react';
import {postBaker} from '../api/recipe'


export default React.createClass({
	getInitialState(){
		return{
			baker: ''
		}
	},

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	},
	handleSubmit(e) {
		e.preventDefault()
		//console.log(this.state.id)
		postBaker(this.state.baker)
		this.setState({
			baker: ''
			
		})
	},

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<input id={this.state.id} onChange={this.handleChange} type='text' placeholder='Baker' name='baker' value={this.state.baker} />
      </form>
    )
  }
})