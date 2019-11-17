contador =0;
function arrayAleatorio() {
    var lista = [0,1,2,3,4,5,6,7,8,9];
    lista = lista.sort(function() {return Math.random() - 0.5});

    for (let i = 0; i <lista.length ; i++) {
        console.log(lista[i]);
       let btn1 = document.getElementById("btn"+i);
       btn1.setAttribute("value",lista[i]);
    }
}

