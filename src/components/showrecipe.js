import React from 'react';
import {getRecipe, getBaker, getStep, getIngredient} from '../api/recipe'
import store from '../store'

export default React.createClass({
	getInitialState(){
		return{
			recipe: []
		}
	},
	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()

			this.setState({
				recipe: appState.recipeReducer.recipe
			})
		})
		console.log(this.state.recipe)
		getRecipe()
	},
	componentWillUnmount(){
		this.unsubscribe()
	},
	render(){
		return(
			<div>
				<ul>
					{this.state.recipe.map(user=>(
						<li>Hello {user.recipe}</li>
					))}	
				</ul>
			</div>
		)
	}
})