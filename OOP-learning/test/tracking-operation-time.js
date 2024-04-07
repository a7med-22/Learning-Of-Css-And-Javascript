                                                                       // 1st method 

let startTime = new Date();

// operation

for (let i = 0; i <= 10000; i++){
    document.write(`<div>${i}</div>`);
}

let endTime = new Date();

let duration = endTime - startTime;

console.log(duration);

                                                                        // 2nd method 

let startTime1 = performance.now();

// operation

for (let i = 0; i <= 10000; i++) {
  document.write(`<div>${i}</div>`);
}

let endTime1 = performance.now();

let duration1 = endTime - startTime;

console.log(duration1);


                                                                                // 3rd method                                                            

performance.mark("startTime2");

// operation

for (let i = 0; i <= 10000; i++) {
    document.write(`<div>${i}</div>`);
}

performance.mark("endTime2");

console.log(performance.measure("duration2", "startTime2", "endTime2"));


