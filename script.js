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

const showNotification = (message, typeMessage) => {
  popUpNotification = document.createElement('div')
  popUpNotification.classList.add('overlay');

  const notification = document.createElement('div');
  notification.classList.add('notification', typeMessage);

  popUpNotification.appendChild(notification);

  const textMessage = document.createElement('p');
  textMessage.innerText = message;

  const buttonNotification = document.createElement('button');
  buttonNotification.innerText = 'Ok';

  buttonNotification.addEventListener('click', () => {
    popUpNotification.remove();
  })

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
      showNotification('Transação finalizada com sucesso!', 'sucess')
    } catch (error) {
      showNotification(erro.message, 'error')
    } finally {
      showNotification('Operação finalizada!')
    }
  })
}