
'use strict';
(function() {

function TeamCtrl($scope, $http, socket) {
	var self = this; 
    $scope.teamMembers = [{
      name: 'Austin',
      about: 'Used Redis + Memcached + Node.js + Go + MongoDB + MariaDB + postgres + Clojure to help scale his first start-up from 10 to 20 hits per day ಠ_ರೃ',
      pic: "assets/images/audakel.png"
    }, {
      name: 'James',
      about: 'Creater of zelda.js. His post "Why Go Is Better Than You And Everything You Own And Why It Always Will Be" was featured on the front page of NYT at #2 spot',
      pic: "assets/images/james.png"

    }, {
      name: 'Kenna',
      about: 'US Senate, Sequia Capital, Clarke Capital.... She has done it all.',
      pic: "assets/images/kenna.png"

    }];			
}

angular.module('webApp')
  .controller('TeamCtrl', TeamCtrl);

})();