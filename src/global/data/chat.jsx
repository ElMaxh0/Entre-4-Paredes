import { tkgen } from "../../global/tokenGenerator/tokengen";
var  data0 = {
  "Nome": "AleHotBott",
  "Informacoes": "Alehotpjkts",
  "Desenvolvido": "AlehotPJKTS",
  "License": "MIT",
  "Total-Perguntas":23,
  "perguntas": [
    {
      "id": 1,
      "type":1,
      "variavelaarmazenardados":"var01",
      "duvida": "Bem Vindo Selecione Uma Opcao",
      "opcoes": [
      'https://static.thenounproject.com/png/11584-200.png',
      'https://static.thenounproject.com/png/11584-200.png',
      'https://static.thenounproject.com/png/11584-200.png',
      ]
    },
    {
      "id": 2,
      "type":2,
      "respostanterior":1,
      "variavelaarmazenardados":"var02",
      "duvida" : "Pergunta1",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 3,
      "type":2,
      "respostanterior":1,
      "duvida" : "PerguntaW",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 4,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta4",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 5,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta5",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 6,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta6",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 7,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta7",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 8,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta8",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 9,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta9",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 10,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta10",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 11,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta12",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 12,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta12",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 13,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta13",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 14,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta14",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 15,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta15",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 16,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta16",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 17,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta17",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 18,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta18",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 19,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta19",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 20,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta20",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 21,
      "type":1,
      "respostanterior":1,
      "duvida" : "Pergunta21",
      "opcoes": [
        'https://static.thenounproject.com/png/11584-200.png',
        'https://static.thenounproject.com/png/11584-200.png',
        'https://static.thenounproject.com/png/11584-200.png',
        ]
    },
    {
      "id": 22,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta22",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    {
      "id": 23,
      "type":2,
      "respostanterior":1,
      "duvida" : "Pergunta23",
      "opcoes": [
        "A",
        "B",
        "C "
      ]
    },
    
  ]
}
async function getApiData(){
  async function dataComponent () {
      const apiUrl = 'https://mergulharte.com.br/appapi/bot/?keyresp='+tkgen(75)+'=quest0&skey=test';
      var api = await fetch(apiUrl).then((response) => response.json())
      console.log(api)
      return api.elements
  }
  
  var data1= dataComponent();
  return data0
}
var  data0a = getApiData()
var data = data0
export {
    data,
}

