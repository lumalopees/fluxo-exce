window.onload = () => {
  const accountValue = document.querySelector('#account').value;
  const formAccount = document.querySelector('#transactionForm')

  formAccount.addEventListener('click')
  if (accountValue.length !== 6) {
    throw new Error('Necessita de 6 dígitos a conta, por favor verificar')
  }
}