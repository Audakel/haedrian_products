'use strict';

angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('papyrus', {
        url: '/papyrus',
        templateUrl: 'app/papyrus/papyrus.html',
        controller: 'PapyrusCtrl'
      });
  });
