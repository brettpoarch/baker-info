import axios from 'axios'
import store from '../store'


export function postBaker(baker) {
	axios.post('http://localhost:3001/bakers', {baker}).then(user=>{
		//console.log(user, 'baker')
		store.dispatch({
			type: 'POST_RECIPE',
			baker: user.data.baker
		})
	})
}
export function postRecipe(recipe, bakerId, prepTime, cookTime, temp) {
	axios.post('http://localhost:3001/recipes', {recipe, bakerId, prepTime, cookTime, temp}).then(user=>{
		//console.log(user, 'user')
		store.dispatch({
			type: 'POST_RECIPE',
			recipe: user.data.recipe,
			bakerId: user.data.bakerId,
			prep: user.data.prepTime,
			cook: user.data.cookTime,
			temp: user.data.temp

		})
	})
}
export function postStep(recipeId, directions, stepid) {
	axios.post('http://localhost:3001/steps', {recipeId, directions, stepid}).then(user=>{
		console.log(user.data.id, 'step')
		store.dispatch({
			type: 'POST_RECIPE',
			recipeId: user.data.recipeId
		})
	})
}
export function postIngredient(amount, unit, ingredient, stepId) {
	axios.post('http://localhost:3001/ingredients', {amount, unit, ingredient, stepId}).then(user=>{
		//console.log(user)
		store.dispatch({
			type: 'POST_RECIPE',
			arr: user.data.list,
		})
	})
}
export function getRecipe() {
	axios.get('http://localhost:3001/recipes').then(res=>{
		postRecipe()
	})
}