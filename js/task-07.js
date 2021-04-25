const inputChangeRange = document.querySelector('#font-size-control'),
      spanResult = document.querySelector('#text');

 const onSubscriberRange = (i) => {
    const fontSize = i.currentTarget.value;
    spanResult.style.fontSize = `${fontSize}px`
 }    
 inputChangeRange.addEventListener('change', onSubscriberRange);