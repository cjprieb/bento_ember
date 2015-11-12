import Ember from 'ember';

export default Ember.Component.extend({
	tagName: "tr",
	//classNames: ["editing"],
	//editing: false,
	actions: {
		saveTheRecipe() {
			console.log("saving recipe in recipe-item");
		},
		/*editRecipe() {
			this.set("editing", true);
		},
		saveRecipe() {
			let recipe = this.get("recipe");
			if ( recipe.get("name") === "" ) {
				console.log("sending delete to route");
				this.sendAction("deleteRecipe", recipe);
			}
			else {
				recipe.set("newRecipe", false);
				console.log("sending update to route");
				this.sendAction("updateRecipe", recipe);
			}
			this.set("editing", false);
		},
		cancelRecipe() {
			this.set("editing", false);		
			let recipe = this.get("recipe");
			if ( recipe != undefined && recipe.get("newRecipe") ) {
				this.sendAction("deleteRecipe", recipe);
			}
			else {
				this.sendAction("revertRecipe", recipe);				
			}
		},
		deleteRecipe() {
			console.log("sending delete to route");
			let recipe = this.get("recipe");
			this.sendAction("deleteRecipe", recipe);
		},*/
		editRecipe() {
			let recipe = this.get("recipe");
			console.log("sending showModal to route: " + recipe.get("name"));
			this.sendAction("showModal", "components/recipe-input", recipe);
		}
	},
	setup: function() {
		let recipe = this.get("recipe");
		console.log("setting up: " + recipe.get("name"));
		if ( recipe != undefined && recipe.get("newRecipe") ) {
			this.set("editing", true);			
		}
	}.on('init')
});
