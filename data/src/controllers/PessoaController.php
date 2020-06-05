<?php

require_once __DIR__ . '/../service/PessoaService.php';

class PessoaController
{
    public function buscarPessoa() {
        try {
            $dadosPessoa = (new PessoaService())->listar($_REQUEST['nome']);
            return json_encode(array("sucesso" => true, "message" => "Dados retornado com sucesso", "dados" => $dadosPessoa));
        }catch (Exception $exception) {
            return $exception->getMessage();
        }
    }
}

switch ($_GET['acao']) {
    case 'listar':
        echo (new PessoaController)->buscarPessoa();
        break;
    default:
        echo 'não existe a açao';
        break;
}