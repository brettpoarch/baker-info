import React from 'react';
import Recipe from '../components/recipe'
import ShowRecipe from '../components/showrecipe'

export default React.createClass({
 render() {
   return (
       <div>
     <h1>Hello world</h1>
     <Recipe />
     <ShowRecipe />
     </div>
   )
 }
})