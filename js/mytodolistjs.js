let li = document.querySelectorAll('li');
let clikedLi = document.getElementsByClassName('done');
let list = document.querySelectorAll('ul');

list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
  if(clikedLi.length === 8){
    setTimeout(() => {
      alert("BARDZO DZIĘKUJĘ MYSZKO!");
    }, 200);
  }
}, false);



