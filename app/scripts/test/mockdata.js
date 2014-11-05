(function () {'use strict';
angular.module('testdemo').run(MockDataSetup);

MockDataSetup.$inject = ['$httpBackend'];

function MockDataSetup($httpBackend) {
	var shoe1 = {id:'123456789', name:'Blue Shoes'};
	var shoe2 = {id:'123456788', name:'Red Shoes'};
	var shoe3 = {id:'123456787', name:'Black Shoes'};
	var shoes = [shoe1, shoe2, shoe3];

	$httpBackend.whenGET('/shoes').respond(shoes);
	$httpBackend.whenGET('/shoes/'+shoe1.id).respond(shoe1);
	$httpBackend.whenGET('/shoes/'+shoe2.id).respond(shoe2);
	$httpBackend.whenGET('/shoes/'+shoe3.id).respond(shoe3);


    $httpBackend.whenGET().passThrough();
}
})();