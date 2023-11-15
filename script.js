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
  const saldo = document.querySelector('#saldo');

  saldo.innerText = +saldo.innerText - amountValue;
}

const showNotification = (message) => {
  popUpNotification = document.createElement('div')
  popUpNotification.classList.add('overlay');

  const notification = document.createElement('div');
  notification.classList.add('notification');

  popUpNotification.appendChild(notification);

  const textMessage = document.createElement('p');
  textMessage.innerText = message;

  const buttonNotification = document.createElement('button');
  buttonNotification.innerText = 'Ok';

  notification.appendChild(textMessage);
  notification.appendChild(buttonNotification);

  document.body.appendChild(popUpNotification);
}

window.onload = () => {
  const formAccount = document.querySelector('#transactionForm')

  formAccount.addEventListener('submit', (event) => {
    event.preventDefault();
 
    try {
      accountCheck();
      balanceCheck(); 
      balancheChange();
      alert('Transação finalizada com sucesso!')
    } catch (error) {
      alert(erro.message)
    } finally {
      alert('Operação finalizada!')
    }
  })
}