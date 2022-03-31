// 1 uzduotis //
const n1 = -2

if (n1 > 0) {
    console.log('Skaičius geras.');
} else if (n1 < 0) {
    console.log('Skaičius blogas');
   }

// 2 uzduotis //
const n2 = 3;
if (n2 === 2) {
    console.log('palaukite');
} else if (n2 === 1) {
    console.log('eikite');
} else if (n2 === 3) {
    console.log('stovekite');
   }


//3 uzduotis //
const d = 3;
const k = 18;
const n3 = 5;

if (k / n3 <= d) {
    console.log('Knygos telpa į dėžes');
} else {
    console.log('Knygos netelpa į dėžes.');
   }

// 4 uzduotis //
let a = 2;
let b = 10;
if (a > b) {
    console.log(a -= 1, b += 1);
} else if (a < b) {
    console.log(a += 1, b -=1)
}

// 5 uzduotis //
const p = 20;
const c = 50;

const porcijuKiekis = c / p;
const likutis = c - p * Math.floor(porcijuKiekis);
console.log(`Saulius nusipirks ${Math.floor(porcijuKiekis)} porcijos ledu ir jam liks ${likutis} centu`);

// 6 uzduotis //
const n4 = 6;
const degt = 3
if (Number.isInteger(n4 / degt)) {
    console.log('Trikampį sudėlioti GALIMA.');
} else {
    console.log('Trikampį sudėlioti NEGALIMA.');
   }

// 7 uzduotis //
/*
    const metai = 2022
    const n5 = 6
 let dienuSkaicius = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  console.log('d =', dienuSkaicius (n5, metai)); */

  const menuo = 20;

  if (menuo === 1 || menuo === 3 || menuo === 5 || menuo === 7 || menuo === 8 || menuo === 10 | menuo === 12) {
      console.log('d = 31'); //kodel reikia prie kiekvieno skaiciaus parasyti menuo, neuztenka tisiog OR || //
  } else if (menuo === 2) {
      console.log('d = 28');
  } else if (menuo === 4 || menuo === 6 || menuo === 9 || menuo === 11) {
      console.log('d = 30');
  } else {
      console.log('Neteisyngas menesio nr.');
  }

// 8 uzduotis //
const k3 = 6;
if (k3 % 2 === 0) {
    console.log('Kambarį tvarkys jaunėlis');
} else {
    console.log('Kambarį tvarkys vyresnėlis');
   }

// 9 uzduotis //
const olimpic = 1896;
const m = 2000
const kelinti = (m - olimpic)/4 + 1;
if (Number.isInteger(kelinti)) {
    console.log('m =', kelinti);
} else {
    console.log('Metai neolimpiniai');
   }

   //ARBA 9 uzd//
   if (m % 4 ===0) {
    console.log('m =', kelinti);
} else {
    console.log('Metai neolimpiniai');
   }

// 10 uzduotis //
const v1 = 8;   //laikrodzio valandos
const m1 = 29;  // laikrodzio minutes
const m2 = 23;  // keliones laikas
const v = 9;    // pamokos val
const mm = 5;   // pamokos min

const v1m = 8*60; 
const v2m = 9*60;
const laikrodzioMin = v1m + m1; //509
const pamokosMin = v2m + mm; //545

if (pamokosMin - laikrodzioMin < m2) {
    console.log('Petras į pamoką pavėluos');
} else {
    console.log('Petras į pamoką nepavėluos');
   }