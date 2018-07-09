let li = document.querySelector('li');
let clikedLi = document.getElementsByClassName('done');
let list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);



  list.addEventListener('click', function (ev){
if(clikedLi.length === 8){
  setTimeout(() => {
    alert("BARDZO DZIĘKUJĘ MYSZKO!");
  }, 200);
}
});
