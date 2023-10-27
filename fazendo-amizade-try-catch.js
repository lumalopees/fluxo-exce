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
    return 'Entrada Permitida'
  } catch (erro) { // captura o erro
    return erro.message;
  } finally { // opcional - sempre executa esse bloco idependente do que acontecer na relação tryXcatch

  }
}

console.log(tentar());