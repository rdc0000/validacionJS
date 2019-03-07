var propForm={
    entradas:document.querySelectorAll('input .validar'),
    valoInput:null,
    expresionRegular
}
 var metForm={
     inicio:function(){
         propForm.entradas.forEach(element => {
             element.addEventListener('focus',metForm.inpFoco);
             element.addEventListener('blur',metForm.inpFueraFoco);
             element.addEventListener('change',metForm.inpEscribiendo);
         });
     },
     inpFoco:function(input){
        propForm.valoInput=input.target.value;
        if (propForm.valoInput=="") {
            document.querySelector('#'+ input.target.id).style.background='rgba(255,0,0)';
            document.querySelector('#'+ input.target.id).style.borderBottom='6px solid rgba(255,0,.8)';
            document.querySelector("[for="+input.target.id+"] .obligatorio").style.display='block';
        }
        document.querySelector("[for="+input.target.id+"] .obligatorio").appendChild(document.createElement("div")).setAttribute("class","error");
    },
    inpEscribiendo:function(input){
        var tipo=input.target.type;
        switch (tipo) {
            case 'text':
                console.log('Esto es un tipo text');
                propForm.expresionRegular= /^[a-zA-Z]+/;
                validar=valForm.valText(2,6,propForm.valor)
                break;
            case 'passsword':
                console.log('Esto es un tipo password');
                break;
            case 'date':
                console.log('Esto es un tipo date');
                break;
            case 'number':
                console.log('Esto es un tipo number')
                break;
            default:
                break;
        }
    }
}
metForm.inicio();

//expresiones regulares imei, url, campor solo enteres, campo solo numeros, solo letras en mayusculas