import Ember from 'ember';

export default Ember.Component.extend({
	show: function() {
		console.log("showing modal");		
		this.$('.modal').modal().on('hidden.bs.modal', function() {
			this.sendAction('close');
		}.bind(this));
	}.on('didInsertElement'),
	actions: {
		ok: function(item) {
			console.log("clicking ok: " + this.get("model"));
		    this.$('.model').modal('hide');
			console.log("dialog hidden");
			this.sendAction('ok', this.get("model"));
			console.log("ok action sent");
		}
	}
});
