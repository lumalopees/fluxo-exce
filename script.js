const accountCheck = () => {
  const accountValue = document.querySelector('#account').value;

  if (accountValue.length !== 6) {
    throw new Error('Necessita de 6 dígitos a conta, por favor verificar')
  } 
}

const balanceCheck = () => {
  const amountValue = document.querySelector('#amount').value;
  const saldoValue = Number(document.querySelector('#saldo').innerText);

  if (amountValue > saldoValue) {
    throw new Error('Valor maior que o saldo')
  }
}

const balancheChange = () => {
  const amountValue = document.querySelector('#amount').value;
  const saldo = document.querySelector('#saldo').innerText;

  saldo.innerText = +saldo.innerText - amountValue;
}

window.onload = () => {
  const formAccount = document.querySelector('#transactionForm')

  formAccount.addEventListener('submit', (event) => {
    event.preventDefault();
 
    try {
      accountCheck();
      balanceCheck(); 
    } catch (error) {
      alert(erro.message)
    } finally {

    }
  })
}