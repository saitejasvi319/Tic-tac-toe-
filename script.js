var btns  = document.querySelectorAll('button.btn');
var reset = document.getElementById('reset');
var turno = 0;

for(var i=0; i<btns.length; i++) {
  btns[i].onclick = function() {
    if(turno % 2 == 0 ) {
      this.innerHTML = "X";
    } else {
      this.innerHTML = "O";
    }
    this.setAttribute('disabled', 'disabled');
    turno++;
    checkWinner();
  }
}
function checkWinner() {
  if( (btns[0].innerText == "X" &&
       btns[1].innerText == "X" &&
       btns[2].innerText == "X") ||
    	(btns[3].innerText == "X" &&
       btns[4].innerText == "X" &&
       btns[5].innerText == "X") ||
     	(btns[6].innerText == "X" &&
}

reset.onclick = function() {
  for(var i=0; i<btns.length; i++) {
      btns[i].innerHTML = "";
      btns[i].removeAttribute('disabled');
    	turno = 0;
	}
}