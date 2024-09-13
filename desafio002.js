function contarLetrasA(texto) {
    const count = {};
    for (let letter of texto.toLowerCase()) {
        count[letter] = (count[letter] || 0) + 1;
    }
    return total = count['a'];
}
console.log(contarLetrasA("Ola Mundo!"));