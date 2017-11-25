import Ember from 'ember';

export default Ember.Route.extend({
	 model() {
    return [{
      id: 'urban-living',
      title: 'Urban Living',
      tools: {
      	frontend: "EmberJs",
      	backend: "Rails",
      },
      status: "Underway",
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    }, {
      id: 'urban-living',
      title: 'Urban Living',
      tools: {
      	frontend: "EmberJs",
      	backend: "Rails",
      },
      status: "Underway",
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    }];
  }
});
