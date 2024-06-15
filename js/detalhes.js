console.log("foi")

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


 

  // nascimento
  // : 
  // "29/03/1988"
  // no_botafogo_desde
  // : 
  // "2016"
  // posicao
  // : 
  // "Goleiro"




  function criarCard(jogador) {
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    const imagem = document.createElement('img');
    imagem.src = jogador.imagem;
    imagem.alt = jogador.nome;
    card.appendChild(imagem);
  
    const nome = document.createElement('h2');
    nome.textContent = jogador.nome;
    card.appendChild(nome);

    const detalhes = document.createElement('h3');
    detalhes.textContent = "Detalhes: "+jogador.detalhes;
    card.appendChild(detalhes);
  
    const altura = document.createElement('h3');
    altura.textContent = "Altura: "+jogador.altura+"m";
    card.appendChild(altura);

    const n_jogos = document.createElement('h3');
    n_jogos.textContent = "Numero de jogos: "+jogador.n_jogos;
    card.appendChild(n_jogos);

    const naturalidade = document.createElement('h3');
    naturalidade.textContent = "Naturalidade: "+jogador.naturalidade;
    card.appendChild(naturalidade);

    const nascimento = document.createElement('h3');
    nascimento.textContent = "Nascimento: "+jogador.nascimento;
    card.appendChild(nascimento);

    return card;
   
}

async function mostra_jogadores(){
  const container = document.getElementById('container');
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const atleta = await fetchData("https://botafogo-atletas.mange.li/2024-1/"+id)
  console.log(atleta)
      const card = criarCard(atleta);
      container.appendChild(card);
  }
  
  mostra_jogadores()