angular.module('myApp').component('formulario', {
    templateUrl: '/js/components/formulario/formulario.component.html',
    bindings: {
        'titulo': '@',
        'pessoas': '='
    },
    controller: function FormularioController() {

        const defaultPessoas= [
            {
            nome: 'Ryan Raimundo Sérgio',
            endereco: 'Rua Santa Terezinha',
            bairro: 'Santa Isabel',
            cep: '68458-405',
            telefone: '(94) 2653-4453',
            celular: '(94) 98964-6078'

            },
            {
                nome: 'Ryan Raimundo Sérgio',
                endereco: 'Rua Santa Terezinha',
                bairro: 'Santa Isabel',
                cep: '68458-405',
                telefone: '(94) 2653-4453',
                celular: '(94) 98964-6078'
        
            },
            {
                nome: 'Ryan Raimundo Sérgio',
                endereco: 'Rua Santa Terezinha',
                bairro: 'Santa Isabel',
                cep: '68458-405',
                telefone: '(94) 2653-4453',
                celular: '(94) 98964-6078'
        
            }
            
        ];


        this.$onInit = function() {
            this.titulo = this.titulo || 'listagem zubu';
            this.pessoas = this.pessoas || defaultPessoas;
        };
    
    }
});
