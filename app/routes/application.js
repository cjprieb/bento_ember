import Ember from 'ember';

export default Ember.Route.extend({	
  actions: {
    showModal: function(name, model) {
      //console.log("showing app modal: " + model.get("name"));
      this.render(name, {
        into: 'application',
        outlet: 'modal', 
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});