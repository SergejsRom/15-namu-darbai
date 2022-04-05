function dalijasi(skaicius) {
    let ska = 0;
    for (let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            ska++;
        }
        
    }
    return ska
}
console.log(dalijasi(24));

function dalijasi(skaicius) {
    let ska = 0
    if (skaicius < 0) {
        skaicius * -1;
        for (let i = 2; i < skaicius; i++) {
            if (skaicius % i === 0) {
                ska++;
            }
            
        }
    } else {
    for (let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            ska++;
        }
        
    }
    }
    return ska
}
console.log(dalijasi(-24));