angular.module('myApp').component('noticiaComponent', {
    templateUrl: '/js/components/noticia/noticia.component.html',
    bindings: {
        'noticia': '='
    },
    controller: function($http){
        this.data = 'hoje';
        console.log(this.noticia);
    }
});


