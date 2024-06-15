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