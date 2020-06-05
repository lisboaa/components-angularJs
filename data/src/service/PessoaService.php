<?php
require_once __DIR__ . '/../database/connection.php';

class PessoaService {

    function formatarData($data, $formato) {
        switch ($formato) {
            case 'BR':
                return implode('/', array_reverse(explode('-', $data)));
            case 'US':
                return implode('-', array_reverse(explode('/', $data)));
        }
        return false;
    }
    
    function listar($nome = '') 
    {
        $db = Banco::getConnection();
        $sql = "SELECT * FROM pessoa WHERE nome LIKE :nome ORDER BY nome";
        $buscarDadosPessoa = $db->prepare($sql);
        $buscarDadosPessoa->bindValue(':nome', "%$nome%");
        $buscarDadosPessoa->execute();
        $dadosPessoa = $buscarDadosPessoa->fetchAll(PDO::FETCH_OBJ);
        return $dadosPessoa;
    }

}
