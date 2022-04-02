/* Soal Tech TO Remedial

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

//Answer
function accum(string) {
  let newStringArr = [];

  for (let i = 0; i < string.length; i++) {
    newStringArr.push(format(string[i], i + 1));
  }
  return newStringArr.join('-');
}
console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));

//funcion kedua ini untuk memformat string diatas menjadi huruf besar & kecil
function format(string, num) {
  let letter = string.toUpperCase();

  while (letter.length !== num) {
    letter += string.toLowerCase();
  }
  return letter;
}
