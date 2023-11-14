window.onload = () => {
  const accountValue = document.querySelector('#account').value;
  const formAccount = document.querySelector('#transactionForm')

  formAccount.addEventListener('submit', (event) => {
    event.preventDefault();

    try {
      if (accountValue.length !== 6) {
        throw new Error('Necessita de 6 dígitos a conta, por favor verificar')
      } 
    } catch (error) {
      alert(erro.message)
    }
  })
}