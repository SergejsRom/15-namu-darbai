console.log('---------1 uzd---------')

let suma1 = 0;
while (suma1 <= 99) {
  const skaicius = (Math.floor(Math.random() * (10 - 1 + 1)) + 1)
  console.log(skaicius)
  suma1 += skaicius;
 
}
console.log(suma1);

console.log('---------2 uzd---------')

let divide7 = 0;

while (divide7 % 7 !== 0 || divide7 === 0) {
   let skaicius = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  divide7 += skaicius;
  console.log(skaicius) 
}
console.log(divide7, 'dalijasi is 7')


console.log('---------3 uzd---------')
const skyriuViso = 8;
let skyriaiPerDiena = 0;
let kiekDienu = 0;
while (skyriuViso > skyriaiPerDiena) {
  kiekDienu++;
  skyriaiPerDiena += kiekDienu
}
vidutiniskai = skyriuViso / kiekDienu
console.log(`perskaitys per ${kiekDienu} dienas (-ų), vidutiniškai per dieną perskaitė ${vidutiniskai.toFixed()}`);

console.log('---------4 uzd---------')
let number5 = 0;
while (number5 !==5) {
  number5 = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  console.log(number5)
  
}
console.log('paskutinis', number5)

console.log('---------5 uzd---------')
let number57;
let ciklas = 0;
while (number57 !==5 && number57 !==7 ) {
  number57 = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  console.log(number57);
  ciklas++
  
}
console.log(`prasisuko ${ciklas} ciklu, paskutinis skaicius ${number57}`)

