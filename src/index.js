// New Array
const arr = ["Ana ", "Thomaz, ", "São Gonçalo - ", "Brasil "]
const [nome, sobrenome, cidade, pais] = arr

document.write(nome, sobrenome, cidade, pais);
document.write("<br/><br/>")

//New Object
const data = {
  name: "Ana",
  surname: "Thomaz",
  city: "São Gonçalo",
  site:"eunaotenhosite.com",
  social: {
    twitter: "@biasthomaz",
    linkedin: "anabsthomaz"
  }
};

//Processo default
/*const name = data.name
document.write(nome);
document.write("<br/><br/>")

const surname =data.surname
document.write(surname);
document.write("<br/><br/>")

const twitter =data.social.twitter
document.write(twitter);
document.write("<br/><br/>")*/

//Destructuring Objects - desestruturação Objeto
/*obs.: {} = não é um bloco lógico e sim a sitaxe do destricturing*/
const{ name, surname} = data;
document.write(name);
document.write(surname);
document.write("<br/><br/>");

//Destructuring - object indentado
const {twitter, linkedin} = data.social;
document.write(twitter);
document.write("<br/><br/>");
document.write(linkedin);
document.write("<br/><br/>");

//Renomeando o valor da variavel - LINKEDIN
const {linkedin: IN} = data.social;
document.write(IN);
document.write("<br/><br/>");


/*Definindo um valor defaut para uma variavel que não existe,
inseri este valor para dentro*/
const{ estado = 'Rio de Janeiro'} = data
document.write(estado);
document.write("<br/><br/>");

/*React - smilar ao Destructuring
import { React } from 'react'*/

let a=42;
 let b=21;

// let c=b;
// let d=a;
// a = c;
// b = d;

document.write("a = ", a);
document.write("<br/><br/>");
document.write("b = ",b);
document.write("<br/><br/>");

//Destructuring Swap
[a, b] = [b, a]
document.write("a = ", a);
document.write("<br/><br/>");
document.write("b = ",b);