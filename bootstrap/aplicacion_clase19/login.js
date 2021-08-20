

var mensajeria = function(){
    var contenedormensajes=document.getElementById('divmensaje')
    contenedormensajes.innerHTML='<div class="alert alert-warring" role="alert">'+mensaje+
    '</div>'

    setTimeout(function(){
        $('.alert').alert('close')
    },5000)
}

var iniciarsesion = function(){
    var email=document.getElementById('inputEmail').value
    var password=document.getElementById('inputPassword').value
    
    console.log(email)
    console.log(password)

    document.getElementById('inputEmail').classList.remove("borderojo")
    document.getElementById('inputPassword').classList.remove("borderojo")

    if(email==null || email==''||email==undefined){
        alert('email es obligatorio')
        mensajeria('email es obligatorio','danger')
        document.getElementById('inputEmail').classList.add('borderojo')
        document.getElementById()
        return false;
    }
    if(password==null || password==''||password==undefined){
        alert('password es obligatorio')
        mensajeria('password es obligatorio','danger')
        document.getElementById('inputPassword').classList.add('borderojo')
        document.getElementById()
        return false;
    }

}
