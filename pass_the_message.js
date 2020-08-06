const submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener('click', function(){
  let input = document.querySelector('.input').value;
  document.getElementById('output').innerHTML = input;
})