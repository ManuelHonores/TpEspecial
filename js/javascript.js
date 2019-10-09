addEventListener("DOMContentLoaded", function(){
    let array = [
        {
            "Nombre" : "Leonardo Molleker",
            "Mail" : "lmolleker1996@gmail.com",
            "Edad" : 23
        },
        {
            "Nombre" : "Manuel Honores",
            "Mail" : "manuel.honores.mh.1@gmail.com",
            "Edad" : 28
        },
        {
            "Nombre" : "Santiago Diaz Pace",
            "Mail" : "sdiazpace@gmail.com",
            "Edad" : 44
        },
        {
            "Nombre" : "Juan Pablo Pereira",
            "Mail" : "juanpifreelancer@gmail.com",
            "Edad" : 19
        }
    ]
    let body =  document.getElementById('container');
    for (let i = 0; i<array.length; i++){
        body.innerHTML += "<tr>" + "<td>" + array[i].Nombre + "</td>" + "<td>" + array[i].Mail + "</td>" + "<td>" + array[i].Edad + "</td>" + "</tr>";
    }
});