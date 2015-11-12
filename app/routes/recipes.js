import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('recipe');
	},
	actions: {
		addRecipe() {
			var recipe = this.store.createRecord('recipe', {
				name: "",
				servings: 0,
				newRecipe: true
			});
			return this.render(modalName, {
				into: 'recipes',
				outlet: 'modal'
			});
		},
		saveRecipe(recipe) {
			console.log("saving recipe in route");
			recipe.save();
		},
		updateRecipe(recipe) {
			console.log("updating recipe in route");
			recipe.save();
		},
		deleteRecipe(recipe) {
			console.log("deleting recipe in route");
			//recipe.destoryRecord();
			recipe.deleteRecord();
			recipe.get("isDeleted");
			recipe.save();
		},
		revertRecipe(recipe) {
			console.log("reverting recipe in route");
			recipe.get("hasDirtyAttributes");
			recipe.changedAttributes();
			recipe.rollbackAttributes();
		},
	}
});