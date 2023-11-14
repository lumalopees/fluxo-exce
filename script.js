const accountCheck = () => {
  const accountValue = document.querySelector('#account').value;

  if (accountValue.length !== 6) {
    throw new Error('Necessita de 6 dígitos a conta, por favor verificar')
  } 
}

const balanceCheck = () => {
  const amountValue = document.querySelector('#amount').value;
  const saldoValue = Number(document.querySelector('#saldo').innerText);


}

window.onload = () => {
  const formAccount = document.querySelector('#transactionForm')

  formAccount.addEventListener('submit', (event) => {
    event.preventDefault();

    try {
      accountCheck();
    } catch (error) {
      alert(erro.message)
    }
  })
}