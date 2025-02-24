function calculateNumbers(var1, var2) {
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    const sum = var1 + var2;
    const difference = var1 - var2;
    const product = var1 * var2;
    const quotient = var1 / var2;

    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}