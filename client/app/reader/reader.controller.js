'use strict';

angular.module('evolutionApp')
  .controller('ReaderCtrl', function ($scope, $modal) {


    $scope.addText = function(){
      $modal.open({
        animation: true,
        templateUrl: 'app/reader/add_text_modal/add_text_modal.html',
        controller: 'AddTextModalCtrl',
        size: 'lg'
      }).result.then(function(textObj){
          console.log(textObj);
        });
    }
  });
