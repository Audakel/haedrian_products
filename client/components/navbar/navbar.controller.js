'use strict';

angular.module('webApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    },{
      'title':'Product',
      'state':'product'
    },{
      'title':'Distro',
      'state':'distribution'
    },{
      'title':'Dev.zone',
      'state':'dev'
    },{
      'title':'Team',
      'state':'team'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
