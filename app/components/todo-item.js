import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ["input-group","checkbox"],
	actions: {
		editTodo() {
			let todo = this.get("todo");
			console.log("sending showModal to route: " + todo.get("title"));
			this.sendAction("showModal", "components/todo-input", todo);
		},
		saveTodo(todo) {
			console.log("saving todo in todo-item: " + todo);
		}
	},
	setup: function() {
		console.log("setting up todo item");
	}.on('didInsertElement')
});
