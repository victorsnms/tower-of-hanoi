//Abstração

/*
construir 3 varetas com display flex column-reverse
(os filhos appendados vão ser mostrados na parte superior)


STYLO
definir titulo
definir alturas e larguras dos discos
defenir alturas e larguras das quadrantes

LÓGICA

HANDLER DE CLICK EM CASA QUADRANTE
( Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.)

VAR1 = 1º VARIAVEL QUE ARMAZENA O VALOR DO OBJETO QUE FOI CLICADO

VAR2 = 2º VARIAVEL QUE ARMAZENA O VALOR DO OBJETO QUE FOI CLICADO

VARIAVEL QUE INDICA MODO (PEGAR / COLOCAR)


>>
VERIFICAÇÃO DE JOGADA POSSIVEL

verificar o width do lastElementChild do VAR1

conta os elementos do VAR2
(se for 0 = true)
se for |== 0{
    verificar o width do lastElementChild do VAR2
    se a > b
}

(Use a propriedade Element.clientWidth para pegar o tamanho dos discos.)
se possível: remover o lastElementChild do VAR1, append lastElementChild no target do 2º click
se não for possível: esvazia o valor de VAR1, manda mensagem de jogada não possível.

VERIFICAR VITORIA
Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.

Verificar se no END
4 elementos


*/


