

const eventbutton1= () =>{
   // document.getElementById("menu").style.backgroundColor.random();

  const getRandomColor= Math.floor(Math.random()*16777215).toString(16);
 
  document.getElementById("menu").style.backgroundColor = "#" + getRandomColor;
//  document.body.style.backgroundColor = "#" + getRandomColor;
  button1.innerHTML = "#" + getRandomColor;
}


const eventbutton2= () =>{
  //  document.getElementById("menu").style.backgroundColor="blue";
  //Declaramos variable para obtener el random de los colores   
  const getRandomColor = Math.floor(Math.random()*15000).toString(16);
  // seleccionamos el div con el que se va a cambiar en este caso es el id menu
    document.getElementById("menu").style.backgroundColor = "#" + getRandomColor;
   //aqui cambiamos el boton por el codigo del color cuando se cambie
    button2.innerHTML = "#" + getRandomColor;

}


const eventbutton3 =() =>{
    const getRandomColor = Math.floor(Math.random()*25000).toString(16);

    document.getElementById("menu").style.backgroundColor = "#" + getRandomColor;

    button3.innerHTML = "#" + getRandomColor;
}

const eventbutton4 =()=>{
    const getRandomColor = Math.floor(Math.random()*45000).toString(16);

    document.getElementById("menu").style.backgroundColor = "#" + getRandomColor;

    button4.innerHTML = "#" + getRandomColor;
}