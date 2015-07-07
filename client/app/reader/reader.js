'use strict';
angular.module('evolutionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reader', {
        url: '/reader',
        templateUrl: 'app/reader/reader.html',
        controller: 'ReaderCtrl'
      });
  });
