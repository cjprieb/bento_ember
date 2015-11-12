import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  servings: DS.attr('number'),
  newRecipe: DS.attr('boolean')
});
