// FOR //
console.log('-----------------');
console.log('FOR');
console.log('-----------------');
// 1 uzd //
const zodis = 'Labas'
for (let i = 0; i < 5; i++) {
    let result = zodis;
    result +=i;
    console.log(zodis);
}
const sveikas = 'sveikas'
for (let i = 0; i < 5; i++) {
    console.log(sveikas)};
// 2 uzd //
console.log('-----------------');
for (let i = 0; i < 5; i++) {
    let result = 0;
    result +=i
    console.log(result);
}
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 3 uzd //
console.log('-----------------');

for (let i = 0; i < 5; i++) {
    let resultatas = 0;
    resultatas +=i*10;
    console.log(resultatas);
}

for (let i = 0; i < 50; i+=10) {
    console.log(i);
}


// 4 uzd //
console.log('-----------------');

for (let i = 49; i <= 53; i++) {
    let resultatas = 0;
    resultatas +=i;
    console.log(resultatas);
}
for (let i = 49; i <= 53; i++) {
    console.log(i)
}

// 5 uzd //
console.log('-----------------');
for (let i = 0; i <5; i++) {
    let result = 0;
    result = (Math.floor(Math.random() * (10 - 0 + 1)) + 0) ; // (Math.floor(Math.random() * (max - min + 1)) + min //
    console.log(result)
}
for (let i = 0; i <5; i++) {
     // (Math.floor(Math.random() * (max - min + 1)) + min //
    console.log(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
}

// 6 uzd //
console.log('-----------------');
for (let i = 1; i < 20; i++) {
    if (i % 3 !== 0)
        console.log(i);
    } 

// 7 uzd //
console.log('-----------------');
for (let a = 1; a <= 10; a++) {
    for (let f = 1; f <= 10; f++) {
        let x = (a * f);
        
       console.log(`${a} * ${f} = ${x}`)
      //console.log(a + "*" + f + "=" +(a*f))
}
}
const skaicius = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${skaicius} = ${i * skaicius}`)
}

// 8 uzd //
const n = 10
console.log('-----------------');
for (let a = 1; a <= n; a++) {
       cm = (a * 2.54);
    
    console.log(`${a} coliai = ${cm} cm`);
    }

// 9 uzd //
console.log('-----------------');
const palukanos = 0.02;
let indelis = 100;
const nMetai = 5;


    for (let i = 1; i <= nMetai; i++) {

        let pal = (indelis * palukanos);
     
        indelis += pal;
     
             console.log(`metai: ${i}, palukanos: ${pal.toFixed(2)}, indelis: ${indelis.toFixed(2)} ` );
     
     }


// 10 uzd //
console.log('-----------------');

for (let i = 1; i <= 2022; i++) {
    if (i % 4 === 0 && i % 100 !== 0 && i % 400 !== 0) {
        console.log(`keliamieji ${i}`);
        }else{    if (i % 400 === 0) {
                    console.log(`simtmecio keliamieji ${i}`);
                }else{    if (i % 100 === 0 && i % 400 !== 0) {
                        console.log(`NEkeliamieji simtmecio ${i}`);
                        
                   }
            }
    }}
