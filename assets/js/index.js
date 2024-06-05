// Обробка помилок

function pow(base, exponent){
    if(typeof base !== `number`){
        throw new Error('Введіть коректне число')
    }
    if(typeof exponent !== 'number'){
        throw new Error('Введіть коректну степень') 
    }

    if(!Number.isInteger(exponent) || exponent > Number.MAX_SAFE_INTEGER){
        throw new Error('Степень повинна бути більше за 0')
    }

    if(base === 0){
        return 0;
    }

    if(exponent === 0 || base === 1){
        return 1;
    }

    if(exponent < 0) {
        return 1 / pow(base, exponent * -1)
    }

    return base * pow(base, exponent - 1);
}

try {
    const pow1 = pow(2, 2);
    console.log(pow1);
} catch (error) {
    console.log(error);
}

console.log(`Після обробки`)




