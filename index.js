const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de estilização",
        "Uma linguagem de programação de marcação",
        "Uma linguagem de programação de script",
        "Uma linguagem de consultas de banco de dados"
      ],
      correta: 2
    },
     {
      pergunta: "Qual é a função do método 'getElementById()' em JavaScript?",
      respostas: [
        "Selecionar um elemento por sua classe",
        "Selecionar um elemento por seu ID",
        "Selecionar um elemento por sua tag",
        "Selecionar um elemento por seu nome"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
        "<>"
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
        "** Este é um comentário **"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método de array é usado para adicionar novos elementos ao final de um array?",
      respostas: [
        "push()",
        "add()",
        "append()",
        "insert()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro",
        "Nenhuma das anteriores"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "display()",
        "show()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Operador de ou",
        "Operador de concatenação",
        "Operador lógico 'E'",
        "Operador de negação"
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInteger()",
        "toInteger()",
        "convertToInt()"
      ],
      correta: 0
    },
   {
      pergunta: "Qual função converte uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToInteger()",
        "toInteger()",
        "convertToInt()"
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  // repete as respostas das questões
    for( let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //true
       
       corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }  
        //mostra o contador de acertos no fim da página a cada loop
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  // remove a opção Resposta A do html
  quizItem.querySelector('dl dt').remove() 
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  