var hours = process.argv[2];
var minutes = process.argv[3];
if (hours > 23 || minutes > 59){
console.log('The time specified is not true');
}
else{
result = SetRomanNumerals(hours);
result += " : " + SetRomanNumerals(minutes);
console.log(result);
}
function SetRomanNumerals1_9(number){
if (number==='1' || number==='2'|| number==='3'){
for (var i = 0; i < Number(number) ; i++){
result += "I";
}
}
if (number==='4'){
result += "IV";
}
if (number==='5' || number==='6'|| number==='7'|| number==='8'){
result += "V";
for (var i = 0; i < Number(number%5) ; i++){
result += "I";
}
}
if (number==='9'){
result += "IX";
}
return result;
}
function SetRomanNumerals(number){
result = "";
if (number<10){
SetRomanNumerals1_9(number);
}
if (number>=10 && number<=19){
result += "X" + SetRomanNumerals1_9(number[1]);
}
if (number>=20 && number<=29){
result += "XX" + SetRomanNumerals1_9(number[1]);
}
if (number>=30 && number<=39){
result += "XXX" + SetRomanNumerals1_9(number[1]);
}
if (number>=40 && number<=49){
result += "XL" + SetRomanNumerals1_9(number[1]);
}
if (number>=50 && number<=59){
result += "L" + SetRomanNumerals1_9(number[1]);
}
return result;
}
