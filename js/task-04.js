const decrementBtnRef = document.querySelector('[data-action="decrement"]'),
      incrementBtnRef = document.querySelector('[data-action="increment"]'),
      resultSpanRef = document.querySelector('#value');
let counterValue = 0;
const onChangeIncrement = () => {
        counterValue++;
        resultSpanRef.textContent = counterValue;
      }
const onChangeDecrement = () => {
        counterValue--;
        resultSpanRef.textContent = counterValue;
      }
decrementBtnRef.addEventListener('click', onChangeDecrement);
incrementBtnRef.addEventListener('click', onChangeIncrement);