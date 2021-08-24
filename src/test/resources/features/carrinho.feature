#language:pt

@funcionais
Funcionalidade: Carrinho de Compras
				Sendo um usuário do site
				Quero pesquisar pelo produto desejado
				Para incluir no carrinho de compras

  Cenário: Incluir Produto no carrinho sem informar cep de destino
    Dado que pesquiso pelo produto "iPhone 11 Apple (64GB) Preto"
    Quando seleciono o produto "iPhone 11 Apple (64GB) Preto" 
    E realizo a inclusao do produto "iPhone 11 Apple (64GB) Preto" no carrrinho
    Então tenho o produto "iPhone 11 Apple (64GB) Preto" incluido no carrinho para compra
    
  Cenário: Incluir Produto no carrinho informando cep de destino inválido
    Dado que pesquiso pelo produto "iPhone 11 Apple (64GB) Preto"
    Quando seleciono o produto "iPhone 11 Apple (64GB) Preto" 
    E informo o cep de destino com cep "00000000"
    Então visualizo a mensagem de cep incorreto
    
  Cenário: Incluir Produto no carrinho informando cep de destino válido
    Dado que pesquiso pelo produto "iPhone 11 Apple (64GB) Preto"
    Quando seleciono o produto "iPhone 11 Apple (64GB) Preto"
    E informo o cep de destino com cep "49095360"
    E realizo a inclusao do produto "iPhone 11 Apple (64GB) Preto" no carrrinho
    Então tenho o produto "iPhone 11 Apple (64GB) Preto" incluido no carrinho para compra
    
  Cenário: Verificar mensagem quando produto não possuir estoque
    Dado que pesquiso pelo produto "Tinta Majirel louro"
    Quando seleciono o produto "Tinta Majirel Emb.nova Louro Cor 7"
    Então visualizo a mensagem que o produto não possui estoque