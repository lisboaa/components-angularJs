<h2 style="text-align: center;">Imagem de como ficou os componentes criados</h2>

![component-angularJS](https://user-images.githubusercontent.com/36475975/83668504-7425a600-a5a6-11ea-95f2-e42319768d2c.png)

Primeiramente temos que instalar ou utilizar um cdn do angularJS, nesse caso estou utilizando o cdn.</br>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js" crossorigin="anonymous"></script></br></br>

Criar um arquivo que vai conter o 'controller' de nosso component.

'use strict'; </br>
angular.module('myApp', []).controller('AppController', ['$scope', function($scope) {
}]);</br>


Lembrando que o cdn deve ser inserido dentro ta tag <head></head> da sua index.

-Em seguida criaremos os arquivos para iniciar a implemetação dos components</br>
00 - formulario.html.</br>
01 - formulario.component.js</br>

dentro do arquivo formulario.html criaremos um formulario normal em html, seguindo sua estrutura padrão de formulario,
já no formulario.component.js criaremos um "bind" para que ele encontre onde foi criado o formulario e transforme ele
em um component.

angular.module('myApp').component('formulario', {
    templateUrl: '/js/components/formulario/formulario.html',
});

.component -> recebe o nome do component que vai ser utilizado na sua index.</br></br>
templateUrl -> recebe o caminho relativo de onde foi criado o formulario.</br></br>

Agora na sua index informe o caminho de onde esta o arquivo do componento 'formulario.component.js',
no meu caso o arquivo esta nesse caminho relativo.

<script src="/js/components/formulario/formulario.component.js"></script></br></br>

Após informar o caminho na index chame o component dentro da sua index da seguinte forma.</br></br>

<formulario></formulario></br>

Prontinho, os demais components são criados seguindo o mesmo raciocinio.</br></br>
