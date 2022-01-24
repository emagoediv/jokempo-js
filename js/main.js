//player
const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const pontosPlayer = document.getElementById('pontosPlayer')
let npontosPlayer = 0;
//bot
const bot = document.getElementById('bot')
const msgBot = document.getElementById('msgBot')
const pontosBot = document.getElementById('pontosBot')
let npontosBot = 0;

const statusMsg = document.getElementById('status')

pedra.addEventListener('click', () => {jokempo(1)})
papel.addEventListener('click', () => {jokempo(2)})
tesoura.addEventListener('click', () => {jokempo(3)})

function jokempo(selecionadoDoPlayer){
    let valorSelecionadoDoPlayer = selecionadoDoPlayer
    let valorSelecionadoDoBot = selecionadoDoBot()

    mudarImagemDoBot(valorSelecionadoDoBot)

    let vitorioso = comparaValores(valorSelecionadoDoPlayer, valorSelecionadoDoBot)

    contarPontos(vitorioso)

    mostrarQuemGanhou(vitorioso)

}




function selecionadoDoBot(){
    return  Math.floor(Math.random() * 3 + 1)
}


function mudarImagemDoBot(valorSelecionadoDoBot) {
    if(valorSelecionadoDoBot == 1) {
        bot.src = "../images/pedra.png"
        msgBot.innerHTML = "pedra"
    }else if(valorSelecionadoDoBot == 2) {
        bot.src = "../images/papel.png"
        msgBot.innerHTML = "papel"
    }else {
        bot.src = "../images/tesoura.png"
        msgBot.innerHTML = "tesoura"
    }
}


function comparaValores(player, bot) {
    let pedra = 1
    let papel = 2
    let tesoura = 3
    let vitorioso
    if(player == pedra && bot == papel){
        vitorioso = "bot venceu"
    }else if(player == papel && bot == tesoura){
        vitorioso = "bot venceu"
    }else if(player == tesoura && bot == pedra){
        vitorioso = "bot venceu"
    }else if(player == bot){
        vitorioso = "empate"
    }else{
        vitorioso = "player venceu"
    }

    return vitorioso
}

function contarPontos(vitorioso){
    if(vitorioso == "player venceu"){
        npontosPlayer++
        pontosPlayer.innerHTML = npontosPlayer
    }else if(vitorioso == "bot venceu"){
        npontosBot++
        pontosBot.innerHTML = npontosBot
    }
}

function mostrarQuemGanhou(vitoriosoMsg) {
    statusMsg.innerHTML = vitoriosoMsg
}




