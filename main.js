// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//passo 1 

var txtCor = document.getElementById("cor");
var txtTraco = document.getElementById("traco");

var cor = "red";
var traco = 2;

//passo 2

function mouseEvent (e) {
    //passo 3
}

canvas.addEventListener("mousemove", mousemove);

function mousemove (e) {
   //passo 4

    if (eventoMouse == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = traco;

        ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);

        ctx.lineTo(posicaoX, posicaoY);

        ctx.stroke();
    }

   //passo 5 
}

//function limpar () {
  //passo 6
//}

txtCor.addEventListener("input", function () {
    cor = txtCor.value;
});

//txtTraco.addEventListener("input", function (){
   //passo 7
//});