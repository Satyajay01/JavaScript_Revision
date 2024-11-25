//------------------break-------------

for (let i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 5) {
        console.log(`Number ${i} Detected`);
        break;
    }
};

//--------------continue-----------------

for (let i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 5) {
        console.log(`Number ${i} Detected`);
        continue;
    }
};