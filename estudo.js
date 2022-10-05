let tabuada = 2;
let nome "Ana SAra"

function escreva(){

    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write(tabuada + " x 1 ="+ (tabuada*1)+"<br>");
    document.write("feito por" + nome);
    }
function minhaTabuada(){
    for(let i; i <= 10; i++){
        document.write("Tabuada do "+ i + " <br>");
        for(let j = 1; j <= 10; j++){
            document.write(i + " x " + j + " = " + (j*i)+"<br>");
        }
        document.write("<br>");
    }
}
function quadrado(){
    for(let i = 2; i <= 1000; i++){
        document.write("o quadrado de " + " e  " + (i*i) + "<br>")
    }
}
