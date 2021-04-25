const inputTextRef = document.querySelector('#name-input'),
      spanResultRef = document.querySelector('#name-output');

const onChangeStatus = (i) => {
  let textResult = i.currentTarget.value
   if (textResult){
     spanResultRef.textContent = textResult;
   }else{
    spanResultRef.textContent = 'незнакомец';
   }
  
}

inputTextRef.addEventListener('input', onChangeStatus);