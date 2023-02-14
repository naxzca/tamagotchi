
var Comer = 100;
var Baño = 100;


function Loop(time = 3){

  var total = Comer + Baño;

 
  if(Comer <= 0 || Baño <= 0){
     document.getElementById("pet").src="img/muerto.jpg";
     document.getElementById('mensaje').innerHTML = 'Felicidades, se murio';
  }
  else if(total > 200){
     document.getElementById("pet").src="img/happy.jpg";
  }
  else if(total > 100){
     document.getElementById("pet").src="img/serio.Png";
  }
 
  else if(total > 50){
     document.getElementById("pet").src="img/triste.jpg";
  }
 

  Comer = Comer - parseInt(time);
  Baño = Baño - parseInt(time);


  let comer = document.getElementById('comer');
  if (comer) {
  document.getElementById('comer').style.width = Comer + 'px';
  document.getElementById('Baño').style.width = Baño + 'px';
  }


  document.getElementById('Comer').innerHTML = Comer + '%';
  document.getElementById('Baño').innerHTML = Baño + '%';
}



function Start(){
  var temporizador = setInterval(Loop, 1000);
}


function alimentar(){
  Comer = 100;
  document.getElementById('Comer').innerHTML = Comer + '%';
  document.getElementById('Comer').style.width = Comer + 'px';
}


function lavar(){
  Baño = 100;
  document.getElementById('Baño').innerHTML = Baño + '%';
  document.getElementById('Baño').style.width = Baño + 'px';
}




Start();