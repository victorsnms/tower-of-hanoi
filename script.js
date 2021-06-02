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
/* const container = document.getElementById('container')
const rodape = document.getElementById('rodape')
const varetaStart = document.getElementById('vareta__start')
const varetaOffset = document.getElementById('vareta__offset')
const varetaEnd = document.getElementById('vareta__end')
const discoVermelho = document.getElementById('disco__vermelho')
const discoVerde = document.getElementById('disco__verde')
const discoRoxo = document.getElementById('disco__roxo')
const discoAzul = document.getElementById('disco__azul')
discoAzul.style.width = '30%'
discoRoxo.style.width = '50%'
discoVerde.style.width = '70%'
discoVermelho.style.width = '90%'
const alertaMensagem = document.getElementById('mensagem')
varetaStart.appendChild(discoVermelho)
varetaStart.appendChild(discoVerde)
varetaStart.appendChild(discoRoxo)
varetaStart.appendChild(discoAzul) */



// declarando variaveis
let posicaoEscolhida
let posicaoColocada
let modo = 1
let count = 0

//Checar modos

const container = document.getElementById('container')
const varetaStart = document.createElement('div')
varetaStart.classList.add('vareta')
const varetaOffset = document.createElement('div')
varetaOffset.classList.add('vareta')
const varetaEnd = document.createElement('div')
varetaEnd.classList.add('vareta')
const discoVermelho = document.createElement('div')
discoVermelho.classList.add('disco')
discoVermelho.classList.add('vermelho')
const discoVerde = document.createElement('div')
discoVerde.classList.add('disco')
discoVerde.classList.add('verde')
const discoRoxo = document.createElement('div')
discoRoxo.classList.add('disco')
discoRoxo.classList.add('roxo')
const discoAzul = document.createElement('div')
const mensagem = document.createElement('p')
mensagem.classList.add('alerta-mensagem')
const button = document.createElement('button')
button.classList.add('btnstyle')
discoAzul.classList.add('disco')
discoAzul.classList.add('azul')
discoAzul.classList.add('aparecendo')
discoRoxo.classList.add('aparecendo')
discoVerde.classList.add('aparecendo')
discoVermelho.classList.add('aparecendo')
discoAzul.style.width = '30%'
discoRoxo.style.width = '50%'
discoVerde.style.width = '70%'
discoVermelho.style.width = '90%'
const alertaMensagem = document.getElementById('mensagem')
container.appendChild(varetaStart)
container.appendChild(varetaOffset)
container.appendChild(varetaEnd)
container.appendChild(mensagem)
varetaStart.appendChild(discoVermelho)
varetaStart.appendChild(discoVerde)
varetaStart.appendChild(discoRoxo)
varetaStart.appendChild(discoAzul)





function verificarModo() {
    if (modo === 1) {
        if (count > 0) {
            verificarVitoria()
            posicaoEscolhida.classList.toggle('selected')
            limparListenersModo2()
        }
        modo1()
        console.log('Modo:', modo)
        count++
    }
    if (modo === 2) {
        posicaoEscolhida.classList.toggle('selected')
        /*adiciona borda no disco*/
        posicaoEscolhida.lastElementChild.classList.add('discBorder')
        alertaMensagem.innerText = ''
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
    /*animação adicionada*/
    posicaoEscolhida.lastElementChild.classList.remove('aparecendo')
    posicaoEscolhida.lastElementChild.classList.add('subindo')
    verificarModo()

}

function pegarPosicaoEscolhidaOffset(event) {
    posicaoEscolhida = event.currentTarget
    console.log(posicaoEscolhida)
    modo = 2
    /*animação adicionada*/
    posicaoEscolhida.lastElementChild.classList.remove('aparecendo')
    posicaoEscolhida.lastElementChild.classList.add('subindo')
    verificarModo()

}

function pegarPosicaoEscolhidaEnd(event) {
    posicaoEscolhida = event.currentTarget
    console.log(posicaoEscolhida)
    modo = 2
    /*animação adicionada*/
    posicaoEscolhida.lastElementChild.classList.remove('aparecendo')
    posicaoEscolhida.lastElementChild.classList.add('subindo')
    verificarModo()

}

function modo1() {

    varetaStart.addEventListener('click', pegarPosicaoEscolhidaStart)
    varetaOffset.addEventListener('click', pegarPosicaoEscolhidaOffset)
    varetaEnd.addEventListener('click', pegarPosicaoEscolhidaEnd)
}

function aplicaJogadaStart(event) {

    posicaoColocada = event.currentTarget
    console.log(posicaoColocada)
    /*animação parada*/
    posicaoEscolhida.lastElementChild.classList.remove('subindo')
    posicaoEscolhida.lastElementChild.classList.add('aparecendo')

    if (posicaoColocada.childElementCount === 0) {

        discoSelecionado = posicaoEscolhida.lastElementChild
        posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
        varetaStart.appendChild(discoSelecionado)
        console.log(posicaoColocada.lastElementChild.style)
        modo = 1
        /*remove borda do disco*/
        if(count > 0){
            posicaoColocada.lastElementChild.classList.remove('discBorder')
        }
        verificarModo()
    } else {

        if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
            console.log(alertaMensagem)
            alertaMensagem.innerText = 'Não é possível fazer essa jogada'
            modo = 1
            /*remove borda do disco*/
            if(count > 0){
                posicaoEscolhida.lastElementChild.classList.remove('discBorder')
            }
            verificarModo()
        } else {

            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaStart.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)
            modo = 1
            /*remove borda do disco*/
            if(count > 0){
                posicaoColocada.lastElementChild.classList.remove('discBorder')
            }
            verificarModo()
        }

    }

}

function aplicaJogadaOffset(event) {
    posicaoColocada = event.currentTarget
    console.log(posicaoColocada)
    /*animação parada*/
    posicaoEscolhida.lastElementChild.classList.remove('subindo')
    posicaoEscolhida.lastElementChild.classList.add('aparecendo')

    if (posicaoColocada.childElementCount === 0) {
        discoSelecionado = posicaoEscolhida.lastElementChild
        posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
        varetaOffset.appendChild(discoSelecionado)
        console.log(posicaoColocada.lastElementChild.style)
        modo = 1
        /*remove borda do disco*/
        if(count > 0){
            posicaoColocada.lastElementChild.classList.remove('discBorder')
        }
        verificarModo()

    } else {

        if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
            console.log(alertaMensagem)
            alertaMensagem.innerText = 'Não é possível fazer essa jogada'
                //mudar o modo
            modo = 1
            /*remove borda do disco*/
            if(count > 0){
               posicaoEscolhida.lastElementChild.classList.remove('discBorder')
            }
            verificarModo()

        } else {

            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaOffset.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)
            modo = 1
            /*remove borda do disco*/
            if(count > 0){
                posicaoColocada.lastElementChild.classList.remove('discBorder')
            }
            verificarModo()

        }

    }

}

function aplicaJogadaEnd(event) {
    posicaoColocada = event.currentTarget
    console.log(posicaoColocada)

    /*animação parada*/
    posicaoEscolhida.lastElementChild.classList.remove('subindo')
    posicaoEscolhida.lastElementChild.classList.add('aparecendo')

    if (posicaoColocada.childElementCount === 0) {
        discoSelecionado = posicaoEscolhida.lastElementChild
        posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
        varetaEnd.appendChild(discoSelecionado)
        console.log(posicaoColocada.lastElementChild.style)
        modo = 1
        /*remove borda do disco*/
        if(count > 0){
            posicaoColocada.lastElementChild.classList.remove('discBorder')
        }
        verificarModo()

    } else {

        if (posicaoColocada.lastElementChild.style.width < posicaoEscolhida.lastElementChild.style.width) {
            console.log(alertaMensagem)
            alertaMensagem.innerText = 'Não é possível fazer essa jogada'
                //mudar o modo
            modo = 1
            /*remove borda do disco*/
            if(count > 0){
                posicaoEscolhida.lastElementChild.classList.remove('discBorder')
            }
            verificarModo()

        } else {

            discoSelecionado = posicaoEscolhida.lastElementChild
            posicaoEscolhida.removeChild(posicaoEscolhida.lastChild)
            varetaEnd.appendChild(discoSelecionado)
            console.log(posicaoColocada.lastElementChild.style)
            modo = 1
            /*remove borda do disco*/
            if(count > 0){
                posicaoColocada.lastElementChild.classList.remove('discBorder')
            }
            verificarModo()

        }

    }

}

function modo2() {
    varetaStart.addEventListener('click', aplicaJogadaStart)

    varetaOffset.addEventListener('click', aplicaJogadaOffset)

    varetaEnd.addEventListener('click', aplicaJogadaEnd)
}

function limparListenersModo2() {
    //limpar listeners do modo 2
    varetaStart.removeEventListener('click', aplicaJogadaStart)
    varetaOffset.removeEventListener('click', aplicaJogadaOffset)
    varetaEnd.removeEventListener('click', aplicaJogadaEnd)

}

function limparListenersModo1() {
    //limpar listeners do modo 1
    varetaStart.removeEventListener('click', pegarPosicaoEscolhidaStart)
    varetaOffset.removeEventListener('click', pegarPosicaoEscolhidaOffset)
    varetaEnd.removeEventListener('click', pegarPosicaoEscolhidaEnd)
}

function victory() {
    varetaEnd.appendChild(discoVermelho)
    varetaEnd.appendChild(discoVerde)
    varetaEnd.appendChild(discoRoxo)
    varetaEnd.appendChild(discoAzul)
}

function verificarVitoria() {
    if (varetaEnd.childElementCount === 4) {
        alertaMensagem.innerText = 'Game Over'
        rodape.appendChild(button)
        button.innerText = 'Play again!'
        button.addEventListener('click', resetGame)
    }

}

function resetGame() {
    varetaStart.appendChild(discoVermelho)
    varetaStart.appendChild(discoVerde)
    varetaStart.appendChild(discoRoxo)
    varetaStart.appendChild(discoAzul)
    alertaMensagem.innerText = ''
    rodape.innerHTML = ''

}