let s = "Pedro";
console.log(s.length);        // tamanho da string
console.log(s.charAt(0));    // caractere na posição
console.log(s.at(-1));       // aceita índice negativo

/*
.slice(inicio, fim)
.substring(inicio, fim)
.substr(inicio, tamanho)
*/
console.log("JavaScript".slice(0, 4)) // "Java"
console.log("JavaScript".substring(4,10)) // "Script"
/*.includes(texto)
.startsWith(texto)
.endsWith(texto)
.indexOf(texto)
.lastIndexOf(texto)
*/

console.log("frontend dev".includes("dev")) // true
console.log("api/v1/users".startsWith("api"))// true
console.log("index.html".endsWith(".html"))// true

/*.replace(busca, novo)
.replaceAll(busca, novo)
*/
console.log("Olá Pedro".replace("Pedro", "João"))      // "Olá João"
console.log("1-1-1".replaceAll("-", "."))             // "1.1.1"

/*
.toUpperCase()
.toLowerCase()
*/
console.log("Dev".toUpperCase()) // "DEV"

/*limpeza de dados
.trim()
.trimStart()
.trimEnd()
*/
console.log("  texto  ".trim()) // "texto"

/* Dividir e juntar 
.split(separador)
.concat(texto)
.repeat(n)
*/
console.log("HTML,CSS,JS".split(",")); // ["HTML","CSS","JS"]
console.log("Dev".repeat(3));// "DevDevDev"

/*Codificação
.normalize()
.localeCompare() */

console.log("a".localeCompare("b")) // -1