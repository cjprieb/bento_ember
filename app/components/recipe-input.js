import Ember from 'ember';

export default Ember.Component.extend({
	//titleText: "Edit recipe",
	//saveButtonText: "Save",
	//isNew: false,
	actions: {
		saveTheRecipe() {
			console.log("saving recipe in recipe-input");
			/*let recipe = this.get("recipe");
			if ( recipe.get("name") === "" ) {
				console.log("warn user of error");
				//this.sendAction("deleteRecipe", recipe);
			}
			else {
				recipe.set("newRecipe", false);
				console.log("sending update to route");
				this.sendAction("updateRecipe", recipe);
			}*/
		},
		/*cancel() {	
			console.log("canceling recipe");
			let recipe = this.get("recipe");
			if ( recipe != undefined && recipe.get("newRecipe") ) {
				this.sendAction("deleteRecipe", recipe);
			}
			else {
				this.sendAction("revertRecipe", recipe);				
			}
			this.sendAction("sendCloseAction");
		},
		deleteRecipe() {
			console.log("sending delete to route");
			let recipe = this.get("recipe");
			this.sendAction("deleteRecipe", recipe);
		}*/
	},
	setup: function() {
		console.log("setting up recipe dialog");
		/*let recipe = this.get("recipe");
		if ( recipe != undefined && recipe.get("newRecipe") ) {
			console.log("is new recipe");
		//	this.set("isNew", true);	
		//	this.set("title", "Add recipe");
		//	this.set("saveButtonText", "Add");		
		}
		else {			
			console.log("is existing recipe");
		}*/
	}.on('didInsertElement')
});
