const {sum, convertEuroToGBP, convertEuroToJPY, convertEuroToUSD} = require('./app.js');

test('la suma de 14 + 9 es igual a 23', ()=>{
    const firstNum = 14;
    const secondNUm = 9;

    const result = sum(firstNum, secondNUm);

    expect(result).toBe(23);
});

test('La conversion de 5 euros a JPY es 639.5', ()=>{
    const monto = 5;
    
    const result = convertEuroToJPY(monto);
    expect(result).toBe(639.5);
});

test('La conversion de 5 euros a USD es 6', ()=>{
    const monto = 5;
    
    const result = convertEuroToUSD(monto);
    expect(result).toBe(6);
});

test('La conversion de 5 euros a GBP es 4', ()=>{
    const monto = 5;
    
    const result = convertEuroToGBP(monto);
    expect(result).toBe(4);
});
