'use strict';
(function() {

function ProductCtrl($scope, $http, socket) {
	var self = this; 
    $scope.products = [{
      name: 'Curo',
      about: 'Curo is the next generation of banking for Microfinance Institutions in developing nations, already trusted by 40,000 people. Now even easier to use with lots more features.',
      state:'curo'
    }, {
      name: 'Mifos',
      about: 'Mifos is the extended platform for delivering the complete range of financial services needed for an effective financial inclusion solution.',
      state:'mifos'

    }, {
      name: 'Papyrus',
      about: 'Papyrus is the paperless MFI office. This means going digital with all your loan and admin documents, and that can lead to a lot of benefits. It can save you money, increase productivity, save space, make documentation and information sharing easier, keep loan information more secure, and make for an eco-friendly office.',
      state:'papyrus'

    }, {
      name: 'Chari',
      about: 'Chari combines community-based lending techniques with social network data, we use a trustworthiness scoring platform optimized to service emerging markets; specifically, markets where traditional credit scores and collateral frameworks may not exist.',
      state: 'chari'

    }];			
}

angular.module('webApp')
  .controller('ProductCtrl', ProductCtrl);

})();