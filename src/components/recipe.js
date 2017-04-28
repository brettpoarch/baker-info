import React from 'react';
import {postRecipe, postBaker, postStep, postIngredient} from '../api/recipe'


export default React.createClass({
	getInitialState(){
		return{
			baker: '',
			recipe: '',
			//sname: this.state.id + this.state.amount,
			steps:[],
			amount: '',
			units:'',
			ingredient: '',
			id: 1,
			prepTime: '',
			cookTime: '',
			cookTemp: '',
			stepId: 1 ,
			ingredientId: 1,
			directions: ''
		}
	},
	handleIngredient(){
		console.log(this.state.steps)
		postIngredient(this.state.amount, this.state.units, this.state.ingredient, this.state.stepId)
		this.setState({
			steps:[this.state.amount, this.state.units, this.state.ingredient, ...this.state.steps],
			units:'',
			amount: '',
			ingredient: '',
			ingredientId: this.state.ingredientId + 1

		})
	},

	handleStep(){
		postStep(this.state.id, this.state.directions)
		postIngredient(this.state.amount, this.state.units, this.state.ingredient, this.state.stepId)
		this.setState({
			units:'',
			amount: '',
			ingredient: '',
			directions: '',
			stepId: this.state.stepId + 1

		})
	},
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value})
	},
	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state.id)
		postRecipe(this.state.recipe, this.state.id, this.state.prepTime, this.state.cookTime, this.state.cookTemp) 
		postBaker(this.state.baker)
		postStep(this.state.id, this.state.directions)
		//postIngredient(this.state.id)
		//postIngredients(this.state.amount2, this.state.units2, this.state.ingredient2, this.state.id)
		this.setState({
			baker: '',
			recipe: '',
			steps: [],
			amount: '',
			units: '',
			directions: '',
			ingredient: '',
			id: this.state.id + 1,
			prepTime: '',
			cookTime: '',
			cookTemp: '',
			stepId: this.state.stepId + 1 ,
			ingredientId: 1
			
		})
	},

  render() {
    return (
	    	<div>
	      <form onSubmit={this.handleSubmit}>
	      	<input id={this.state.id} onChange={this.handleChange} type='text' placeholder='Baker' name='baker' value={this.state.baker} />
	      	<input id={this.state.id} onChange={this.handleChange} type='text' placeholder='Recipe name' name='recipe' value={this.state.recipe} />
	      	<input id={this.state.id} onChange={this.handleChange} type='text' placeholder='prep time' name='prepTime' value={this.state.prepTime} />
	      	<input id={this.state.id} onChange={this.handleChange} type='text' placeholder='cook time' name='cookTime' value={this.state.cookTime} />
	      	<input id={this.state.id} onChange={this.handleChange} type='text' placeholder='cook temp' name='cookTemp' value={this.state.cookTemp} />
	      	<input id={this.state.stepsId} onChange={this.handleChange} type='text' placeholder='amount' name='amount' value={this.state.amount} />
				  <input id={this.state.stepsId} onChange={this.handleChange} type='text' placeholder='units' name='units' value={this.state.units} />
				  <input id={this.state.stepsId} onChange={this.handleChange} type='text' placeholder='ingredient' name='ingredient' value={this.state.ingredient} />
				  <input onChange={this.handleChange} type='textarea' placeholder='directions' name='directions' value={this.state.directions}/> 
	 				<ul>
           {this.state.steps.map(function(amount, units, ingredient){
             return <li>
	                    <input key={'aid' + this.state.ingredientId} id={'id' + this.state.stepsId} key={this.state.id} onChange={this.handleChange} type='text' placeholder='amount' name='amount' value={amount} />
	                    <input key={'uid' + this.state.ingredientId} id={this.state.stepsId} onChange={this.handleChange} type='text' placeholder='units' name='units' value={units} />
	                    <input key={'iid' + this.state.ingredientId} id={this.state.stepsId} onChange={this.handleChange} type='text' placeholder='ingredient' name='ingredient' value={ingredient} />
         	          </li>
           }.bind(this))}
          </ul>
	      	<button type='submit'>Submit</button>
	      </form>
	      <button onClick={this.handleIngredient}>+</button>
	      <button onClick={this.handleStep}>add another step</button>
    	</div>
    )
  }
})