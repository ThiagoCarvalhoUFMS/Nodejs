var somaFunc = require("./soma")
var subFunc = require("./sub")
var multFunc = require("./mult")
var divFunc = require("./div")

var nome = "Thiago"
var sobrenome = "Ramalho"
var a = 1
var b = 2







console.log("O resultado de " + a + "+" + b + " é: " + somaFunc(a,b))
console.log("O resultado de " + a + "-" + b + " é: " + subFunc(a,b))
console.log("O resultado de " + a + "*" + b + " é: " + multFunc(a,b))
console.log("O resultado de " + a + "/" + b + " é: " + divFunc(a,b))
console.log("Feito por: " + nome + " " + sobrenome)

