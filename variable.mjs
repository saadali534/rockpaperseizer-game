/*
var height = 72;
var weight = 297;
var cm = height * 2.54;
var p = weight / 2.2046;
console.log(p);
console.log(cm);
//
var a = p / (((cm / 100) * cm) / 100);
console.log(a);
*/
/*
let str1=222;
console.log(typeof str1);
var name1=true;
console.log(typeof name1);
let var1="saad";
var1=18;
console.log(var1);
var name11 =100;
var name22 =200;
var name3 =name11+name22;

console.log(name3);
*/
// let miles=prompt("plese enter number in miles");
// var milestokilometer=1.60934;
// var convert=miles/milestokilometer;
// document.write("your distan is ", convert );
// var sentence=" the distance of "+ miles +" is equal to "+convert;
// document.write(sentence);

import PromptSync from "prompt-sync";
import randomInteger from "random-int";
let prompt = PromptSync();

const choise=["rock","paper","sezzer"];
let user=prompt("0 for rock  1 for paper  2 for sezzer");
const choisecomputer=randomInteger(0,2);
const choisenamecomputer=choise[choisecomputer]
console.log("human",choise[user]);
console.log("computer",choisenamecomputer);
// var a=choise[user];
// var b=choisenamecomputer;
if(choise[user]==choisenamecomputer){
    console.log("game is draw")
}
else if(choise[user]=="rock" && choisenamecomputer=="paper"){
    console.log("computer is winer from the human")
}
else if(choise[user]=="paper" && choisenamecomputer=="rock"){
    console.log("human wins the game from the computer")
}
else if(choise[user]=="paper" && choisenamecomputer=="sezzer"){
    console.log("human win the game from the computer")
}
else if(choise[user]=="sezzer" && choisenamecomputer=="rock"){
    console.log("computer wins the game from human");
}


