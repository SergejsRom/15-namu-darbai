//FUNKCIJOS
// 1 uzd //
function sum(a, b) {
    return `${a} + ${b} = ${a+b}`
}
const c = sum(7, -45);
console.log(c);

// 2 uzd //

function palyginti(a, b) {
    if (a > b) { 
        return 'pirmas didesnis.'   
    } else if (a < b) {
        return 'antras didesnis'
    } else if (a === b) {
        return 'lygus'
    }}
    const rezultatas = palyginti(5, 9)
    console.log(rezultatas);

    //ARBA
    const pirmieji = [3, 3];
    const antrieji = [5 ,7];
    const tretieji = [8, 4];
    function palyginimas (skaiciai) {
        if (skaiciai[0] > skaiciai[1]) { 
            return 'pirmas didesnis.'   
        } else if (skaiciai[0] < skaiciai[1]) {
            return 'antras didesnis'
        } else if (skaiciai[0] === skaiciai[1]) {
            return 'lygus'
        }}
        const result1 = palyginimas(pirmieji)
        console.log(result1);
        const result2 = palyginimas(antrieji)
        console.log(result2);
        const result3 = palyginimas(tretieji)
        console.log(result3);

        // 3 uzd //
const metai1 = 2019;
const metai2 = 1856;
const metai3 = 789;
const metai4 = 3256;
function keliamieji(pirmi) {
    if (pirmi % 4 === 0) {
        return 'taip'
    } else {
        return 'ne'
}}
const arKeliamieji1 = keliamieji(metai1);
console.log(arKeliamieji1);
const arKeliamieji2 = keliamieji(metai2);
console.log(arKeliamieji2);
const arKeliamieji3 = keliamieji(metai3);
console.log(arKeliamieji3);
const arKeliamieji4 = keliamieji(metai4);
console.log(arKeliamieji4);

// 4 uzd //
const skaicius1 = 2;
const skaicius2 = 3;
const skaicius3 = 5;

function kvadratu(a) {
    return Math.pow(a, 2);
}
const resultatasKvadratu1 = kvadratu(skaicius1);
console.log(resultatasKvadratu1);
const resultatasKvadratu2 = kvadratu(skaicius2);
console.log(resultatasKvadratu2);
const resultatasKvadratu3 = kvadratu(skaicius3);
console.log(resultatasKvadratu3);

// 5 uzd //
const sk1 = 5;
