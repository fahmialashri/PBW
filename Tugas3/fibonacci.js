function fibonacci(n) {
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Masukkan jumlah angka dalam deret Fibonacci: ", (n) => {
  const numberOfTerms = parseInt(n);
  if (isNaN(numberOfTerms) || numberOfTerms <= 0) {
    console.log("Masukkan harus berupa bilangan bulat positif.");
  } else {
    console.log(
      `Deret Fibonacci dengan ${numberOfTerms} angka adalah:`,
      fibonacci(numberOfTerms)
    );
  }
  readline.close();
});
