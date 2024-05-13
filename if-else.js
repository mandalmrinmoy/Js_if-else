//age
let age = 8;
if (age >= 18) {
    console.log("You can drive!")
}
else {
    console.log("You cannot drive")
}
//ternary oparetor:
let c=age>18 ? "You can drive" : "You cannot drive";
console.log(c);
//Write a program that determines whether a given number is positive or negative.
let num = 1;
if (num < 0) {
    console.log("This is a negative number");
}
else {
    console.log("This is a positive number");
}
//ternary oparetor:
let det=num>0 ? "This a positive number" : "This a negative number";
console.log(det);
//Write a program that checks if a number is even or odd.
let n = 5;
if (n % 2 === 0) {
    console.log("this is a even number");
}
else {
    console.log("this is a odd number")
}
//tenary oparetor:
let x= n % 2 == 0 ? "This is a even number" : "This is a odd number";
console.log(x);
//Write a program to determine the greater of two numbers.
let a = 18;
let b = 10;
if (a < b) {
    console.log("b greater then a");
}
else {
    console.log("a greater then b")
}
//ternary oparetor
let y= a<b ? "b greater than a" : "a greater than b";
console.log(y);
//Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
let marks = 85;
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = 'B';
} else if (marks >= 70) {
    grade = "B+";
} else if (marks >= 60) {
    grade = "C";
} else {
    grade = "D";
}
console.log("The grade is " + grade);
/*Write a program that calculates the ticket price based on age with the following conditions: 
1. age below 12 pay a ticket price of 5, 
2. age below 18 pay a ticket price of 10, 
3. age below 60 pay a ticket price of 20, 
4. age over 60 play a ticket price of 15.*/
let age_limit=66;
let price;
if(age_limit<12){
    price=5;
}else if(age_limit>=12 && age_limit<18){
    price=10;
}else if(age_limit>=18 && age_limit<60){
    price=20;
}else{
    price=15;
}
console.log("Ticket orice is "+price+" Rs.");
//Write a program that determines if a year is a leap year.
let year=2001;
if(year%4===0 || year%100===0 || year%400===0){
    console.log("This a leap year");
}else{
    console.log("This is not a leap year");
}
/*Write a program that calculates a discount based on the purchase amount.
Prices equal or over 100 discount have a discount of 20. 
Prices equal or over 50 have a discount of 10. 
Otherwise discount is 0*/
let prices=140;
let discount;
if(prices>=100){
    discount=20;
}else if(prices>=50 && prices<100){
    discount=10;
}else{
    discount=0;
}
console.log("Discount is "+ discount +" Rs.");
//divisible by 2 &3.
let number=4;
if(number%2==0 && number%3==0){
    console.log("This number divisible by 2 and 3.")
}else{
    console.log("This number is not divisible by 2 and 3.")
}