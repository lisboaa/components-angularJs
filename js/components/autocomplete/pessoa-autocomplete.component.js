angular.module('myApp').component('pessoaAutocomplete', {
    templateUrl: '/js/components/autocomplete/pessoa-autocomplete.component.html',
    bindings: {
        'permiteBuscaRemota': '=',
        'opcoesLocais': '=?',
        'delay': '@?',
    },
    controller: function($http) {

        var ctrl = this;
        ctrl.selecionado = null;
        ctrl.item = null;

        ctrl.$onInit = function() {
            ctrl.delay = ctrl.delay || 300;
            ctrl.opcoesLocais = ctrl.opcoesLocais || [];
            ctrl.buscar('');
        }


        ctrl.buscar = function(nome) 
        {
            if(!ctrl.permiteBuscaRemota){
                ctrl.buscaOpcoesLocal(nome);
            } else{
                ctrl.buscaOpcoesRemota(nome);
            }
        }


        ctrl.buscaOpcoesLocal = function(nome) 
        {
            ctrl.pessoas = this.opcoesLocais.filter(pessoa => {
                return pessoa.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1;
            })
        }

        ctrl.buscaOpcoesRemota = function(nome) 
        {
            nome = nome || '';

            $http({
                url: '../../data/src/controllers/PessoaController.php?acao=listar&nome='+nome,
                method: 'GET'
            }).then(function(response) {
                ctrl.pessoas = response.data.dados;
            }).catch((error) => {
                console.log(error);
            })
        }
    }
});