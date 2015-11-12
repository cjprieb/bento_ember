import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('weekly-planning', {path: '/'});
  this.route('todos', {path: '/todos_tutorial'}, function() {
    this.route('complete');
    this.route('incomplete');
  });
  this.route('meals', {path: '/meals'});
  this.route('recipes', {path: '/recipes'}, function() {
    //this.route('edit');
  });
});

export default Router;
