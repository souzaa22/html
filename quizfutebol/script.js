let perguntas = [
    {
        pergunta: " Em que ano, o Brasil ganhou a sua primeira copa do mundo?",
        respostas: ["1950", "1958", "1962", "1970"],
        correta: 1 //1958
    },
    {
        pergunta: "Qual jogador é conhecido como “Rei do Futebol”?",
        respostas: ["Lionel Messi", "Neymar", "Cristiano Ronaldo", "Pelé"],
        correta: 3 //pelé
    },
    {
        pergunta: "Qual país venceu mais Copas do Mundo?",
        respostas: ["Alemanha", "Italia", "Argentina", "Brasil"],
        correta: 3 //brasil
    },
      {
        pergunta: "Qual clube é conhecido como “Los Blancos”?",
        respostas: ["Barcelona", "Real Madrid", "Manchester United", "Juventus"],
        correta: 1 //Real Madrid
    },
    {
        pergunta: "Quem marcou o gol do título da Copa do Mundo FIFA 2014?",
        respostas: ["Lionel Messi", "Mario Götze", "Neymar", "James Rodríguez"],
        correta: 1 //mario götze
    },
    {
        pergunta: "Quem foi eleito melhor jogador da Copa do Mundo FIFA 2022?",
        respostas: ["Kylian mbappé", "Luka modrić", "Lionel Messi ", "Julián Álvarez"],
        correta: 2 //
    },
    {
        pergunta: "Quantas Champions League o Real Madrid tinha conquistado até 2025?",
        respostas: ["12", "13", "14", "15"],
        correta: 3 //Real Madrid
    },
]

let perguntaAtual = 0

let pontuacao = 0

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    //Pega a pergunta atual dentro do array

    document.getElementById("pergunta").innerText = pergunta.pergunta

    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    //Limpa a div antes de adicionar as novas respostas
    pergunta.respostas.forEach(function(resposta, index) {
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>`
    })
}
function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")
    if (index == pergunta.correta) {
        resultado.innerText = "Acertou!"
        pontuacao++
    } else {
        resultado.innerText = "Errou!"
    }
}
function proximaPergunta() {
    perguntaAtual++
    //Vai ppara a próxima pergunta
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    } else {
        mostrarResultadoFinal()
    }
}
function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p>Sua pontuação final é: ${pontuacao}<p>
    <button onclick="location.reload()">Jogar Novamente</button>
`}
mostrarPergunta()