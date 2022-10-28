Feature: Buscar Passagem
    Scenario Outline: Buscar Passagem
        Given acesso o BlazeDemo
        When seleciono origem como "Boston"
        And seleciono destino como "Dublin"
        And clico em buscar passagens
        Then carrega pagina de reservas

