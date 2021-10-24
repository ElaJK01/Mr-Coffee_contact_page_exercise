const nameInput = document.getElementById('name');
const surname = document.getElementById('surname');
const phone = document.getElementById('phone');
const mail = document.getElementById('mail');
const message = document.getElementById('message');
const modal = document.getElementById('modal-container');

const phonePattern = /^(\+\d{2})? ?\d{3}[-]?\d{3}[-]?\d{3}$/;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const namePattern = /^[a-z ,.'-]+$/i;
const surnamePattern = /^[a-z ,.'-]+$/i;
const messagePattern = /(.|\s)*\S(.|\s)*/;

function inputValidation(pattern, inputValue) {
  return pattern.test(inputValue);
}

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  if (inputValidation(namePattern, nameInput.value) && inputValidation(surnamePattern, surname.value)
      && inputValidation(emailPattern, mail.value) && inputValidation(messagePattern, message.value)) {
    if (inputValidation(phonePattern, phone.value) === true || phone.value === '') {
      console.log(`Nadawca: ${nameInput.value} ${surname.value}\nPhone number: ${phone.value}\nAddress email: ${mail.value}\nMessage: ${message.value}`);
      document.getElementById('phone-error').style.display = 'none';
      modal.style.display = 'block';
    } else {
      console.log('Wprowadź numer telefonu we właściwym formacie: +xx xxx-xxx-xxx lub xxxxxxxxx');
      document.getElementById('phone-error').style.display = 'block';
    }
  } else {
    console.log('wprowadź poprawnie wymagane dane');
  }
});

document.getElementById('modal-btn').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});
