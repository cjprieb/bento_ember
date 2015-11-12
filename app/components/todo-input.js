import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		submitTodo(newTitle) {
			if (newTitle) {
				this.sendAction('action', newTitle);
			}
			this.set('newTitle', '');
		},
		saveTodo(todo) {
			console.log("saving todo in todo-input: " + todo);
		}
	},
	setup: function() {
		console.log("setting up todo dialog");
	}.on('didInsertElement')
});
