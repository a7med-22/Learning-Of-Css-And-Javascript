function* generateNUmbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}


function* genearateLetters() {
    yield "A";
    yield "B";
    yield "C";
}

function* generateAll() {
    yield* generateNUmbers();
    yield* genearateLetters();
    yield* [5, 6, 7, 8];
}

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("z"));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// ==================================================================================

// infinite generator 

function* infinitGenerator() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

let generatorForInfinite = infinitGenerator();

console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());
console.log(generatorForInfinite.next());

