function relogio() {
    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras =  19/*horas.toString().padStart(2, "0");*/  /* função toString inverte as horas */
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");


    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`; /* é crase `` e não aspas simples''*/

    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-Feira', 'Sábado')

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`;


    if(formatoHoras >= 0 && formatoHoras <12 ){
        document.querySelector('.test').
        src = 'https://i.pinimg.com/originals/31/09/66/310966f13e930b8c1a7c5ec690387c3d.gif'
        document.body.style.backgroundImage = "url(https://i.gifer.com/5dDh.gif)"
    }

    else if (formatoHoras >= 12 && formatoHoras <18){
        document.querySelector('.test').
        src = 'https://i.pinimg.com/originals/9a/ae/2a/9aae2ab297fd2db91a27b359b79a96d4.gif'
        document.body.style.backgroundImage = "url(https://data.whicdn.com/images/282311363/original.gif)"
        var img= new Image(); img. src= 'url. png';
    }

    else {
        document.querySelector('.test').
        src = 'https://www.bluebus.com.br/wp-content/uploads/2015/09/luavermelha.gif'
        document.body.style.backgroundImage = "url(https://gifs.eco.br/wp-content/uploads/2021/09/gifs-aesthetic-wallpaper-para-desktop-e-mobile-6.gif)"
    }
    

}

setInterval(relogio, 1000);





