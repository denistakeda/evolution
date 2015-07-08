'use strict';

angular.module('evolutionApp')
  .controller('AddTextModalCtrl', function ($scope, $modalInstance) {
    $scope.ok = function () {
      $modalInstance.close({caption: $scope.caption, text: $scope.text});
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
