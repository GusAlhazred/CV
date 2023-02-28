const campoEmail = document.querySelector(".email")
const campoTel = document.querySelector(".tel")
const boton = document.querySelector(".botonEnviar")

console.log(campoEmail.value)

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campoEmail.value))
    {
        return (true)
    }
    return (false)
}

function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
}

const validar = () => {
    if (!ValidateEmail(campoEmail.value)) {
        alert("El mail no es valido")
        return
    }
    if (!validatePhoneNumber(campoTel)){
        alert("El numero de telefono no es valido")
        return
    }
}


boton.addEventListener("click" , validar)