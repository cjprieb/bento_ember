import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('todo');
	},
	actions: {
		createTodo(newTitle) {
			this.store.createRecord('todo', {
				title: newTitle,
				complete: false
			}).save();
		},
		saveTodo(todo) {
			console.log("in saveTodo - todos.js route");
			console.log("  todo: " + todo.get("title"));
			todo.save();
		}
	}
});