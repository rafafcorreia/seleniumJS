Feature: Busca Google
    Scenario: Buscar BlazeDemo
        Given que eu acesso o Google
        When clico na barra de Busca
        And digito "BlazeDemo"
        And pressiono Enter
        Then aparece a pagina de resultado "BlazeDemo"
        