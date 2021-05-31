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
    
*/
//Declarando objetos

const varetaStart = document.getElementById('vareta__start')
const varetaOffset = document.getElementById('vareta__offset')
const varetaEnd = document.getElementById('vareta__end')
const discoVermelho = document.getElementById('disco__vermelho')
const discoVerde = document.getElementById('disco__verde')
const discoRoxo = document.getElementById('disco__roxo')
const discoAzul = document.getElementById('disco__azul')
discoAzul.style.width = '25%'
discoRoxo.style.width = '50%'
discoVerde.style.width = '75%'
discoVermelho.style.width = '100%'
const alertaMensagem = document.getElementById('mensagem')
varetaStart.appendChild(discoVermelho)
varetaStart.appendChild(discoVerde)
varetaStart.appendChild(discoRoxo)
varetaStart.appendChild(discoAzul)
    /*
        
        */
    // declarando variaveis
let posicaoEscolhida
let posicaoColocada
let modo = 2

//EventListeners
if (modo = 1) {
    //removendo eventlisteners

    varetaStart.removeEventListener('click', aplicaJogada)
    varetaOffset.removeEventListener('click', aplicaJogada)
    varetaEnd.removeEventListener('click', aplicaJogada)

    varetaStart.addEventListener('click', function pegarPosicaoEscolhida(event) {
        posicaoEscolhida = event.currentTarget
        console.log(posicaoEscolhida)
        modo = 2

        function mudarmodo() {
            if (modo = 1) {
                modo1()
            }
        }
    })
    varetaOffset.addEventListener('click', function pegarPosicaoEscolhida(event) {
        posicaoEscolhida = event.currentTarget
        console.log(posicaoEscolhida)
        modo = 2

    })
    varetaEnd.addEventListener('click', function pegarPosicaoEscolhida(event) {
        posicaoEscolhida = event.currentTarget
        console.log(posicaoEscolhida)
        modo = 2

    })
}

posicaoEscolhida = varetaStart
if (modo = 2) {
    //removendo eventlisteners
    varetaStart.removeEventListener('click', pegarPosicaoEscolhida)
    varetaOffset.removeEventListener('click', pegarPosicaoEscolhida)
    varetaEnd.removeEventListener('click', pegarPosicaoEscolhida)

    varetaStart.addEventListener('click', function aplicaJogada(event) {

        posicaoColocada = event.currentTarget
        console.log(posicaoColocada)

        if (posicaoColocada.childElementCount === 0) {

            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaStart.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)
        } else {

            if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
                console.log(alertaMensagem)
                alertaMensagem.innerText = 'Nao e possivel fazer essa jogada'
                    //mudar o modo
            } else {

                discoSelecionado = posicaoEscolhida.lastElementChild
                posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
                varetaStart.appendChild(discoSelecionado)
                console.log(posicaoColocada.lastElementChild.style)

            }

        }

    })

    varetaOffset.addEventListener('click', function aplicaJogada(event) {
        posicaoColocada = event.currentTarget
        console.log(posicaoColocada)

        if (posicaoColocada.childElementCount === 0) {
            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaOffset.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)

        } else {

            if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
                console.log(alertaMensagem)
                alertaMensagem.innerText = 'Nao e possivel fazer essa jogada'
                    //mudar o modo

            } else {

                discoSelecionado = posicaoEscolhida.lastElementChild
                posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
                varetaOffset.appendChild(discoSelecionado)
                console.log(posicaoColocada.lastElementChild.style)

            }

        }

    })
    varetaEnd.addEventListener('click', function aplicaJogada(event) {
            posicaoColocada = event.currentTarget
            console.log(posicaoColocada)

            if (posicaoColocada.childElementCount === 0) {
                discoSelecionado = posicaoEscolhida.lastElementChild
                posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
                varetaEnd.appendChild(discoSelecionado)
                console.log(posicaoColocada.lastElementChild.style)

            } else {

                if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
                    console.log(alertaMensagem)
                    alertaMensagem.innerText = 'Nao e possivel fazer essa jogada'
                        //mudar o modo

                } else {

                    discoSelecionado = posicaoEscolhida.lastElementChild
                    posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
                    varetaEnd.appendChild(discoSelecionado)
                    console.log(posicaoColocada.lastElementChild.style)

                }

            }

        })
        /* 
            varetaEnd.addEventListener('click', (event) => {
                posicaoColocada = event.currentTarget
                console.log(posicaoColocada)
                if (posicaoColocada.childElementCount === 0) {
                    discoSelecionado = posicaoEscolhida.lastElementChild
                    posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
                    varetaEnd.appendChild(discoSelecionado)
                }
            }) */
}

//modo 1 - O click vai declarar a posicao escolhida
//modo 2 - O click vai executar a function Clicar


/*
(Use a propriedade Element.clientWidth para pegar o tamanho dos discos.)
se possível: remover o lastElementChild do VAR1, append lastElementChild no target do 2º click
se não for possível: esvazia o valor de VAR1, manda mensagem de jogada não possível.

VERIFICAR VITORIA
Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.

Verificar se no END
4 elementos


*/