const initialState = {
	baker: [],
	recipe: [],
	step: [],
	ingredient:[]
}

export default function (state=initialState, action){
	//console.log(action.ingredient, 'hello')
	switch(action.type) {
		case 'POST_RECIPE':
			return {...state, baker:[action.baker], recipe:[action.recipe], step:[action.step], ingredient:[action.ingredient]}
		default:
			return state
	}
}