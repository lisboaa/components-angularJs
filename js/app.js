'use strict';

angular.module('myApp', ['ui.select', 'ngSanitize']).controller('AppController', ['$scope', function($scope) {

  $scope.noticias = [
      {
          titulo: 'Meu titulo1',
          descricao: 'minha descricao1'
      },
      {
          titulo: 'Meu titulo2',
          descricao: 'minha descricao2'
      }
  ];



  $scope.selected = null;

  $scope.pessoasOpcoes = [
    {
        nome: 'Meu titulo1',
        descricao: 'minha descricao1'
    },
    {
        nome: 'Meu titulo2',
        descricao: 'minha descricao2'
    }
];

  
  }]);