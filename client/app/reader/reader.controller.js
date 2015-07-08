'use strict';

angular.module('evolutionApp')
  .controller('ReaderCtrl', function ($scope, $modal, $http, $log) {
    $scope.texts = [];
    $http.get('/api/texts')
      .success(function(textsList){
        angular.extend($scope.texts, textsList);
      })
      .error(function(data, status){
        $log.error('Can not get text list. Server response with status: ', status);
      });

    $scope.addText = function(){
      $modal.open({
        animation: true,
        templateUrl: 'app/reader/add_text_modal/add_text_modal.html',
        controller: 'AddTextModalCtrl',
        size: 'lg'
      }).result.then(function(textObj){
          $http.post('/api/texts', textObj)
            .success(function(createdText){
              $scope.texts.unshift(createdText);
              $log.info('Text has been successfully created')
            })
            .error(function(data, status){
              $log.error('Can not create text. Server response with status: ', status, 'And data: ', data);
            })
        });
    }
  });
