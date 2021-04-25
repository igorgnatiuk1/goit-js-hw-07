const inputWithValidatorRef = document.querySelector('#validation-input');
const onValidator = (i) => {
const textLength = i.currentTarget.value.length
  const valueAttribute = +inputWithValidatorRef.getAttribute("data-length"); 
  textLength === valueAttribute ? inputWithValidatorRef.style.borderColor = 'green'
   : inputWithValidatorRef.style.borderColor = 'red'
};
inputWithValidatorRef.addEventListener('blur', onValidator);