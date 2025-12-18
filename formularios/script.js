const formLogin = document.getElementById('formLogin')

console.log('formLogin', formLogin)

formLogin,addEventListener('submit',(event) =>{
    event.preventDefault()

    // validação do formulário
    // '. username > 6 caractere
    // password > 8 caractere
    //-> capturar as informações oelos ids dos inputs
    //-> realizar as validações

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');


if(usernameInput.value.length >= 6){
    console.log("Validação bem sucedida");       
} else{
    console.log("Erro, o Username possui menos de 6 caracteres.");
}

if(passwordInput.value.length >= 8){
    console.log("Validação em sucedida");
} else{
    console.log("Erro, a senha possui menos de 8 caracteres")
}

})