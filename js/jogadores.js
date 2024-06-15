const atleta_card = document.getElementById("atleta_card")

function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os dados');
        }
        return response.json();
      })
      .then(data => {
        return data; 
      })
      .catch(error => {
        throw new Error('Houve um problema na requisição:', error);
      });
  }


function criarCard(jogador) {
    
    const card = document.createElement('div');
    card.classList.add('card');
  
    
    const linkDetalhes = document.createElement('a');
    linkDetalhes.href = "detalhes.html?id="+jogador.id;
    
    card.appendChild(linkDetalhes);
  
    
    const imagem = document.createElement('img');
    imagem.src = jogador.imagem;
    imagem.alt = jogador.nome;
    linkDetalhes.appendChild(imagem);

    const saibaMais = document.createElement("button");
  saibaMais.textContent = "Saiba mais";
  linkDetalhes.appendChild(saibaMais);
  
  const nome = document.createElement('h2');
  nome.textContent = jogador.nome;
  linkDetalhes.appendChild(nome);
  
    return card;
   
}



async function mostra_jogadores(){
    const container = document.getElementById('container');
    const atletas = await fetchData("https://botafogo-atletas.mange.li/2024-1/all")
    console.log(atletas)
    atletas.forEach(jogador => {
        const card = criarCard(jogador);
        container.appendChild(card);
    });
    }
    
    mostra_jogadores()