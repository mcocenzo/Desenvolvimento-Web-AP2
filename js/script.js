import { hex_sha256 } from "./sha256-min.mjs";

const alvo = '03d570b25194224ebdaf819238cbfb4985f978b4f603257aa144ba824aefb7d0';
const senha =  document.getElementById('senha')

document.getElementById('btn_enviar').onclick = () =>{
    const entrada = document.getElementById('senha').value;
    if (hex_sha256(entrada) === alvo){
        sessionStorage.setItem('logado', '1');
        window.location.href = 'jogadores.html';
    }else{
        senha.innerHTML = 'Senha incorreta';
        console.log("erro")
    }
}