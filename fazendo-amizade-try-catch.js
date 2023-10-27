const checar = (idade) => {
  // if (idade >= 18) {
  //   return true; //apta 
  // } else {
  //   return false // não apta
  // }

  if (idade < 18) {
    throw new Error ('Entregada Negada')
  }
}

const tentar = () => {
  const idade = 17;

  // if (checar(idade)) {
  //   return 'Entrada Permitida';
  // } else {
  //   return 'Entregada Negada';
  // }

  try { // tenta executar algo
    checar(idade)
  } catch (erro) { // captura o erro
    return erro.message;
  }
}

console.log(tentar());