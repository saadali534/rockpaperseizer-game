/*setTimeout(() => {
    console.log(123);
    
}, 3000);*/
/*console.log("saad");
let 
colors=["white","black","orange"];
colors.push("brown");
console.log(colors);
var age=34;
var name1= "saad";
console.log(typeof age);
console.log(typeof name1);
var a;
console.log(typeof a);
var a=undefined
console.log(typeof a);
var a=null;
console.log(typeof a);
var  a=true;
console.log(typeof a);
console.log('hello' + 'world');
console.log('hello' + ' ' + 'world' );
var a = 5+5*6-10/(3+6);
console.log(a);
var age = 25
++age;
console.log(age);*/
/*var a= 6;
var b= 5;
var c= a++ + --b - --a;//6+4-6
console.log(a);//6
console.log(b);//4
console.log(c);//4

alert('welocome to js land \n' + 'happing coading');
var a= "hello saad Ahmad khan";
alert(a);
var email= "email@123";
alert("my email address is " + email);
document.write("YAh! i can weite html codes" );
var age=15;
alert('i am '+ age + 'years old');
var birthyear=1999;
document.write(birthyear + "<br>"+ typeof birthyear);

document.write("a. A heading stating “Rules for naming JS variables"+ "<br>" + "b. Variable names can only contain ______, ______," + "<br>" + "c. ______ and ______" + "<br>");
var a= 25 ; b= 30;
var c= a + b;
document.write("sum of " + a + "and" + b+ "is " + c);

var a=12;
var b="12";
console.log(a===b);

var age = 60;
if (age< 50) 
{
    console.log("a is less than  " + age);
}
else
{
    console.log("a is greater than " + age);
}

var score= 61 
if (score > 40){
    console.log("you are pass " + score + " your grade is A")
    if(score>60){
    console.log("your are pass  "+ score + " your grade is B")
    }
}
else if(score>40)
console.log("your price 1000 " + score)
    else{
        console.log("you are fail")
    }



var a= prompt("enter your city name");

if(a=="karachi"){
    console.log("welcome to the city of lights");
}
else if (a=="peshawar"){
    console.log("city of flowers")
}
else if (a=="islamabad"){
    console.log("capital city")

}
else{
    console.log("!!!!!!!")
}
var b= prompt("enter traffic signal");

if(b=="red"){
    console.log("must stop");
}
else if (b=="yellow"){
    console.log("rady to move")
}
else if (b=="green"){
    console.log("GO GO GO")
}
*/
/*
var totalmarks = parseInt (prompt("Enter total marks"))
var marksobtained =parseInt(prompt("Enter obtained marks"))   
var percentage = (marksobtained*100)/totalmarks;
var grade;
var Remarks;
         

if(percentage>=80 && percentage<=100){
grade="A one" ; 
Remarks ="Good";
}
else if (percentage>=60 && percentage<=70){
    grade="B" ; 
    Remarks ="need improvment";
}
else if (percentage>=50 && percentage<=60){
    grade="Fail" ; 
    Remarks ="Your are fail";
}
document.write("<h1>Marks sheet</h1>" + "Total Marks = " + totalmarks + "<br>marks Obtained =" + marksobtained +"<br>Percentage %" + percentage + "<br>Grade = " + grade +"<br>Remarks" + Remarks);
*/
/*
console.log("----")
var randomnumber=Math.floor(Math.random()*10);
console.log(randomnumber);
var rand = Number(prompt("enter number"));


if (rand==randomnumber){
    document.write("golbine")
}
else if(rand!=randomnumber){
    document.write("not match")
}

console.log("----")
*/
/*
var even
number=13;
console.log(evennumber%2==0)
if(evennumber%2==0){
    console.log("Even")
}
else{
    console.log("odd");
}
*/
/*

var vowel=prompt("enter Alphabat")
if(vowel=="a" ||vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u"){
    console.log(vowel + " vowel ")
}
else{
    console.log("not a vowel");
}
*/
/*
var password="123xyz";
var pass=prompt("enter password")
if(password==pass){
    console.log("coorrect password")
}
else if(pass==""){
    console.log("enter password")
}
else{
    console.log("enter password agin")
}
*/
/*
var clock=prompt("enter time in 24 format")
var statment;
if(clock>=00 && clock<1200){
   statment="Good morning"
}
else if(clock>=1200 && clock<1700){
    statment="Good after noon"
 }  
 else if(clock>=1700 && clock<2100){
    statment="Good Evening"
 } 
 else if(clock>=2100 && clock<2359){
    statment="Good Night"
 }   
    console.log(statment)
*/



/*

var firstnumber = Number(prompt("enter first number"));
var secondnumber = Number(prompt("enter second number"));
var operteros = prompt("enter +,-,*,/");
var statment;
if (operteros == "+") {
  statment = firstnumber + secondnumber;
  
} else if (operteros == "-") {
  statment = firstnumber - secondnumber;
 
} else if (operteros == "*") {
  statment = firstnumber * secondnumber;
 
} else if (operteros == "/") {
  statment = firstnumber / secondnumber;

}
document.write(firstnumber + operteros + secondnumber + "=" + statment);
*/

/*
let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);




var arry=["pizza","burger"]
arry[0]="sandwick";

console.log(arry)



*/
/*
var foods=[];
foods.push("pizza");
foods.push("burgers");
foods.push("snaks");
console.log(foods);
console.log("length = "+foods.lenght);
*/
/*

var arry=["ssc","hsc","bsc","bs","bcom","ms","m.phile","phd"]

for(i=0;i<arry.length;i++){
   document.write((i+1) + ")" + arry[i] + "<br>")
}
*/
/*
var name1=["saad","haziq","adil"];
var score=[320,230,480];
//console.log(name1 + score)

for(i=0;i<name1.length;i++){
    console.log("Score of "+name1[i]+" is "+score[i]+" Persentage: "+((score[i]*100)/500))
}
*/
/*
var date=new Date();
var arry=["sunday","monday","tuesday","wednesday","thursady","friday","saturaday"];
var day=date.setDate(0);
console.log(day)
*/
/*
var dob=new Date("December 26 1999");
var today=new Date("November 26 2022");
var diffdate=today.getTime()-dob.getTime();
console.log(Math.floor(diffdate/(1000*60*60*24*365)));
*/

/*
function name1(a,b){
    console.log(a+b);
}

name1(4,4);


function saad(a){
    console.log(typeof a)
}
saad("sasd");
*/
/*
function mult(a,b=2){
    return a+b;
}
console.log(mult(2,6));
console.log(mult(2,6));
console.log(mult(2));
console.log("////////////////////");
let a="SAAD";
let toLower=a.toLowerCase();
console.log(toLower);
*/


function calscore(sub1,sub2,sub3){
    return Math.floor((sub1+sub2+sub3)/3)
}

function grade(score){
    if(score>80 && score<=100){
        console.log("grade a");
    }
    else if(score>70 && score<=80){
        console.log("grade b");
    }
    else if(score>60 && score<=70){
        console.log("grade c")
    }
    else{
        console.log("fail")
    }
}

var score1=calscore(92,92,92);
var score2=calscore(55,78,88);
var score3=calscore(23,45,62);
console.log("score 1 = "+score1);
console.log("score 2 = "+score2);
console.log("score 3 = "+score3);
grade(score1);
grade(score2);
grade(score3);



var c=10;
function sum(){

var d=20;
var v=c+d;

}

sum();
console.log("v = "+ c);



var a="A"
switch(a){
case "A":
console.log("a is vowel")
break;
}


var vv= "khan";
var dd="ali";
// console.log(vv+" "+ dd)
var finaltext= vv.concat(" "+dd);
console.log(finaltext) ;







const choise=["rock","paper","sezer"];
let userprompt=("0 for rock, 1 for paper, 2 for sezer")
const choisecomputer=randomInteger(0,2);
const choisecomputername=choise[choisecomputer];
console.log(choisecomputer);
console.log(choisecomputername);