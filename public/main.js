  //Initialize Firebase


  var config = {
    apiKey: "AIzaSyBUqw6mRUGVVaCEKLOXny9t4eCBmkeWrts",
    authDomain: "experimentodatabase.firebaseapp.com",
    databaseURL: "https://experimentodatabase.firebaseio.com",
    projectId: "experimentodatabase",
    storageBucket: "experimentodatabase.appspot.com",
    messagingSenderId: "27995376630"
  };


firebase.initializeApp(config);

var database = firebase.database();

var comensales = database.ref('comensal');

var restaurante = database.ref('restaurante');

var restauranteespia = database.ref('espiarestaurante');

//-----------información comensales--------------

var d = new Date();
var dia= d.getDay();
var mes = d.getMonth();
var ano = d.getFullYear();
var hora = d.getHours();
var minuto = d.getMinutes();

var fecha = dia +"/"+ mes +"/" + ano + ":"+ hora +":"+ minuto;


//--------------------Json de envío----------
var data = {
    
  persona: 'comensal',
  fecha: fecha

}

var espiaRestaurant = {
    
    fecha: fecha,
    tipo: "espía"
}




//-------------------------formulario restaurantes----

function validateForm() {
    
    var x = document.forms["myForm"]["firstname"].value;
    
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }else{
        
//    alert(x);
        
        holarestaurante(x);
        
    }
}

//-------funciones de envío------------------------


function hola(){
    
    comensales.push(data);
    
}

holarestaurante = function (x){
    
    alert("Enviado");
    
var dataRestaurant = {
    
    email: x,
    fecha: fecha
   
}
    
    restaurante.push(dataRestaurant);
    
}

function espia(){
    
    
    restauranteespia.push(espiaRestaurant);
    
}






