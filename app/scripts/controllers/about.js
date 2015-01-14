'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope) {

  	//These are from database

    $scope.category1Cities = [{
    	name: 'New York',
    	description: 'New York description here New York description here New York description here',
    	image: 'http://placehold.it/450x350',
    	link: '',
    	price: '600',
    	reviews: [{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	},{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	},{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	}]
    },{
    	name: 'L.A.',
    	description: 'L.A. description here L.A. description here L.A. description here L.A. description here',
    	image: 'http://placehold.it/450x350',
    	link: '',
    	price: '800',
    	reviews: [{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	},{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	},{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	}]
    },{
    	name: 'Boston',
    	description: 'Boston description here Boston description here Boston description here Boston description here',
    	image: 'http://placehold.it/450x350',
    	link: '',
    	price: '500',
    	reviews: [{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	},{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	},{
    		stars: 3,
    		body: 'I love this city!',
    		author: 'tim@example.org',
    		createdOn: '2015-01-12'
    	}]
    }];

    $scope.category2Cities = [{
    	name: 'Paris',
    	description: 'Paris description here Paris description here Paris description here Paris description here',
    	image: 'http://placehold.it/450x350',
    	link: ''
    },{
    	name: 'London',
    	description: 'London description here London description here London description here London description here',
    	image: 'http://placehold.it/450x350',
    	link: ''
    },{
    	name: 'Berlin',
    	description: 'Berlin description here Berlin description here Berlin description here Berlin description here',
    	image: 'http://placehold.it/450x350',
    	link: ''
    }];

    $scope.category3Cities = [{
    	name: 'Tokyo',
    	description: 'Tokyo description here Tokyo description here Tokyo description here Tokyo description here',
    	image: 'http://placehold.it/450x350',
    	link: ''
    },{
    	name: 'Osaka',
    	description: 'Osaka description here Osaka description here Osaka description here Osaka description here',
    	image: 'http://placehold.it/450x350',
    	link: ''
    },{
    	name: 'Seoul',
    	description: 'Seoul description here Seoul description here Seoul description here Seoul description here',
    	image: 'http://placehold.it/450x350',
    	link: ''
    }];

  });
