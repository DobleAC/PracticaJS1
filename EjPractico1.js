const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una cadena de texto: ', (input) => {
   const numeroCaracteres = input.length;
  
  console.log(`Número de caracteres: ${numeroCaracteres}`);
  
  rl.close();
});
