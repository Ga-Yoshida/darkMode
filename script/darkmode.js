const btndarkmode = document.querySelector('#darkmode')
function modoEscuro(){
    document.body.classList.toggle('escuro')
    
}

btndarkmode.addEventListener('change', modoEscuro)