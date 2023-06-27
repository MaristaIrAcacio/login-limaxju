//Bloco de verificação de preenchimento de campos

function Verifica(){
    let user = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    if(!user || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    }else{
        alert("Campos preenchidos com sucesso!");
    }

}