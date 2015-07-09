'use strict';

angular.module('evolutionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('text', {
        url: '/reader/:textId',
        templateUrl: 'app/text/text.html',
        controller: 'TextCtrl'
      });
  });