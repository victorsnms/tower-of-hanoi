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
discoAzul.style.width = '100px'
discoRoxo.style.width = '200px'
discoVerde.style.width = '300px'
discoVermelho.style.width = '400px'
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
let modo = 1
let count = 0

//Checar modos
function verificarModo(){
    if (modo === 1){
        if(count > 0){
            limparListenersModo2()
        }
        modo1()
        console.log('Modo:', modo)
        count++
    }
    if (modo === 2){
        limparListenersModo1()
        modo2()
        console.log('Modo:', modo)
    }
}


verificarModo()

function pegarPosicaoEscolhidaStart(event) {
    posicaoEscolhida = event.currentTarget
    console.log(posicaoEscolhida)
    modo = 2
    verificarModo()

}

function pegarPosicaoEscolhidaOffset(event) {
    posicaoEscolhida = event.currentTarget
    console.log(posicaoEscolhida)
    modo = 2
    verificarModo()

}

function pegarPosicaoEscolhidaEnd(event) {
    posicaoEscolhida = event.currentTarget
    console.log(posicaoEscolhida)
    modo = 2
    verificarModo()

}

function modo1(){

    varetaStart.addEventListener('click', pegarPosicaoEscolhidaStart)
    varetaOffset.addEventListener('click', pegarPosicaoEscolhidaOffset)
    varetaEnd.addEventListener('click', pegarPosicaoEscolhidaEnd)
}

function aplicaJogadaStart(event) {

    posicaoColocada = event.currentTarget
    console.log(posicaoColocada)

    if (posicaoColocada.childElementCount === 0) {

        discoSelecionado = posicaoEscolhida.lastElementChild
        posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
        varetaStart.appendChild(discoSelecionado)
        console.log(posicaoColocada.lastElementChild.style)
        modo = 1
        verificarModo()
    } else {

        if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
            console.log(alertaMensagem)
            alertaMensagem.innerText = 'Nao e possivel fazer essa jogada'
                modo = 1
                verificarModo()
        } else {

            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaStart.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)
            modo = 1
            verificarModo()
        }

    }

}

function aplicaJogadaOffset(event) {
    posicaoColocada = event.currentTarget
    console.log(posicaoColocada)

    if (posicaoColocada.childElementCount === 0) {
        discoSelecionado = posicaoEscolhida.lastElementChild
        posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
        varetaOffset.appendChild(discoSelecionado)
        console.log(posicaoColocada.lastElementChild.style)
        modo = 1
        verificarModo()

    } else {

        if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
            console.log(alertaMensagem)
            alertaMensagem.innerText = 'Nao e possivel fazer essa jogada'
                //mudar o modo
                modo = 1
                verificarModo()

        } else {

            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaOffset.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)
            modo = 1
            verificarModo()

        }

    }

}

function aplicaJogadaEnd(event) {
    posicaoColocada = event.currentTarget
    console.log(posicaoColocada)

    if (posicaoColocada.childElementCount === 0) {
        discoSelecionado = posicaoEscolhida.lastElementChild
        posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
        varetaEnd.appendChild(discoSelecionado)
        console.log(posicaoColocada.lastElementChild.style)
        modo = 1
        verificarModo()

    } else {

        if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
            console.log(alertaMensagem)
            alertaMensagem.innerText = 'Nao e possivel fazer essa jogada'
                //mudar o modo
                modo = 1
                verificarModo()

        } else {

            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaEnd.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)
            modo = 1
            verificarModo()

        }

    }

}



function modo2(){
    varetaStart.addEventListener('click', aplicaJogadaStart)

    varetaOffset.addEventListener('click', aplicaJogadaOffset)

    varetaEnd.addEventListener('click', aplicaJogadaEnd)
}

function limparListenersModo2(){
    //limpar listeners do modo 2
    varetaStart.removeEventListener('click', aplicaJogadaStart)
    varetaOffset.removeEventListener('click', aplicaJogadaOffset)
    varetaEnd.removeEventListener('click', aplicaJogadaEnd)

}

function limparListenersModo1(){
    //limpar listeners do modo 1
    varetaStart.removeEventListener('click', pegarPosicaoEscolhidaStart)
    varetaOffset.removeEventListener('click', pegarPosicaoEscolhidaOffset)
    varetaEnd.removeEventListener('click', pegarPosicaoEscolhidaEnd)
}

    
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