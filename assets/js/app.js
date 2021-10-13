const boton = document.querySelector('#toggle');

const configUser = window.matchMedia('(prefers-color-scheme: dark)');

const localConfig = localStorage.getItem('tema');
if (localConfig === 'dark') {
    document.body.classList.toggle('dark-theme')

    // var foto1 = document.getElementById("foto1");
    // foto1.src = "assets/img/desarrollo-software.svg";

    // var foto2 = document.getElementById("foto2");
    // foto2.src = "assets/img/servicios-cognitivos.svg";

    // var foto3 = document.getElementById("foto3");
    // foto3.src = "assets/img/inteligencia-artificial.svg";

} else if (localConfig === 'light') {
    document.body.classList.toggle('light-theme');

    /*  var foto1 = document.getElementById("foto1");
     foto1.src = "assets/img/desarrollo-software-light.svg";

     var foto2 = document.getElementById("foto2");
     foto2.src = "assets/img/servicios-cognitivos-light.svg";

     var foto3 = document.getElementById("foto3");
     foto3.src = "assets/img/inteligencia-artificial-light.svg"; */
}

boton.addEventListener('click', () => {
    // console.log(configUser.matches)
    let colorTema;

    if (configUser.matches) {
        //Entramos con modo oscuro
        document.body.classList.toggle('light-theme')
        colorTema = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        colorTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }

    localStorage.setItem('tema', colorTema)
})