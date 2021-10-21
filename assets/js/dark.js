const boton = document.querySelector('#toggle');

function cambiarImagen() {
    const configUser = window.matchMedia('(prefers-color-scheme: dark)');
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

    localStorage.setItem('tema', colorTema);

    const localConfig = localStorage.getItem('tema');

    if (localConfig === 'dark') {

        var foto1 = document.getElementById("foto1");
        foto1.src = "assets/img/desarrollo-software.svg";

        var foto2 = document.getElementById("foto2");
        foto2.src = "assets/img/servicios-cognitivos.svg";

        var foto3 = document.getElementById("foto3");
        foto3.src = "assets/img/inteligencia-artificial.svg";

        var foto4 = document.getElementById("foto4");
        foto4.src = "assets/img/inteligencia-artificial.svg";

        var foto5 = document.getElementById("foto5");
        foto5.src = "assets/img/inteligencia-artificial.svg";

        var foto6 = document.getElementById("foto6");
        foto6.src = "assets/img/inteligencia-artificial.svg";

        var logo_pie = document.getElementById("logo_pie");
        logo_pie.src = "assets/img/logo-triplea.svg";

        var inacap = document.getElementById("inacap");
        inacap.src = "assets/img/logo_clientes__0004_logo-blanco.png";

    } else if (localConfig === 'light') {

        var foto1 = document.getElementById("foto1");
        foto1.src = "assets/img/desarrollo-software-light.svg";

        var foto2 = document.getElementById("foto2");
        foto2.src = "assets/img/servicios-cognitivos-light.svg";

        var foto3 = document.getElementById("foto3");
        foto3.src = "assets/img/inteligencia-artificial-light.svg";

        var foto4 = document.getElementById("foto4");
        foto4.src = "assets/img/inteligencia-artificial-light.svg";

        var foto5 = document.getElementById("foto5");
        foto5.src = "assets/img/inteligencia-artificial-light.svg";

        var foto6 = document.getElementById("foto6");
        foto6.src = "assets/img/inteligencia-artificial-light.svg";

        var logo_pie = document.getElementById("logo_pie");
        logo_pie.src = "assets/img/logo-triplea-light.svg";

        var inacap = document.getElementById("inacap");
        inacap.src = "assets/img/logo_clientes__0003_inacap-negro.png";
    }

}


boton.addEventListener('click', () => {

    cambiarImagen();

})

cambiarImagen();