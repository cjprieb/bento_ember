import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
	name(i) { return 'Recipe name ' + (i+1); },
	servings: faker.list.random(1, 2, 4, 6)
});