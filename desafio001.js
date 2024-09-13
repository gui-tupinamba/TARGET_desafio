let a = 0, b = 1, c = 0;
while (b < num) {
    c = a; 
    a = b;
    b += c;
}

const numero = 12;

if (b === numero) {
console.log(`O número ${numero} pertence a sequência de Fibonacci.`);
} else {
console.log(`O número ${numero} não pertence a sequência de Fibonacci.`);   
}