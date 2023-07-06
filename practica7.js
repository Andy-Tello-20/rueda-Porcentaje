let btn = document.getElementById("btn");
let input1 = document.getElementById("inpNum");
let circulo = document.getElementById("circulo");
let porcentaje = document.getElementById("porcentaje")




function cambiarGrados(x) {
    circulo.style.background = `conic-gradient(rgb(108 48 190) ${x}deg, #e8e4e4 0deg)`
    porcentaje.innerText = `${x}%`



}

function cambiarGrados2(x) {
    circulo.style.background = `conic-gradient(rgb(69 201 43) ${x}deg, #e8e4e4 0deg)`
    porcentaje.innerText = `${x}%`
    porcentaje.style.color = `rgb(69 201 43)`
}


btn.addEventListener("click", (event) => {
    event.preventDefault();
    porcentaje.style.color = `rgb(108, 48, 190)`
    porcentaje.innerText = `0%`

    let valorInp = parseInt(input1.value);

    if (valorInp > 0) {
        let inicio = 0


        let intervalo = setInterval(() => {
            inicio += 1;
            cambiarGrados(inicio);


            if (inicio == valorInp) {
                clearInterval(intervalo);
                cambiarGrados2(inicio)
            }

        }, 5)
    };
});