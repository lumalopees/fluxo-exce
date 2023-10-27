const checar = () => {
  if (idade >= 18) {
    return true; //apta 
  } else {
    return false // não apta
  }
}

const tentar = () => {
  const idade = 17;

  if (checar(idade)) {
    return 'Entrada Permitida';
  } else {
    return 'Entregada Negada';
  }
}