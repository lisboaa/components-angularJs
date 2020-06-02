'use strict';

// Define the `phonecatApp` module
angular.module('myApp', []).controller('AppController', ['$scope', function($scope) {
    $scope.greeting = 'Holaaaaa!';


    $scope.noticias = [
        {
            titulo: 'Meu titulo1',
            descricao: 'minha descricao1'
        },
        {
            titulo: 'Meu titulo2',
            descricao: 'minha descricao2'
        }
    ]


  }]);