var propForm={
    entradas:document.querySelectorAll('input .validar'),
    valoInput:null
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
            document.querySelector('#'+ input.target.id).style.borderBottom='6px solid rgba(255,0,0.586)';
            document.querySelector("[for="+input.target.id+"].obligatorio");
            document.querySelector("[for="+input.target.id+"].obligatorio");
        }
     }
 }   
metForm.inicio();