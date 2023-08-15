'use strict';

function BinarioADecimal(num) {
  let arregloBinario = num.split ("").reverse();
  let decimal = 0;
  for (let i = 0; i < arregloBinario.length; i++) {
   decimal += arregloBinario[i] * 2**i;
  }
  return decimal;
  return parseInt(num, 2);
}


function DecimalABinario(num) {
   if (num === 0) {
      return '0'; // Manejar el caso especial cuando el decimal es 0
    }
  
    let binario = '';
    while (num > 0) {
      const residuo = num % 2;
      binario = residuo + binario;
      num = Math.floor(num / 2);
    }
  
    return binario;
  }
  
  const decimal = 12;
  const binario = DecimalABinario(decimal);
  console.log(binario); // Salida: '1100'


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
