'use strict';

angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wallet', {
        url: '/wallet',
        templateUrl: 'app/wallet/wallet.html',
        controller: 'WalletCtrl'
      });
  });
