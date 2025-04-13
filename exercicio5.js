const ultimoAnoDiv = document.getElementById("ultimo_ano");

fetch("./livros.xml")
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // Pega o último <livro>
    const livros = xmlDoc.getElementsByTagName("livro");
    const ultimoLivro = livros[livros.length - 1];

    let ultimoFilho = ultimoLivro.lastChild;

    while (ultimoFilho.nodeType !== 1) {
      ultimoFilho = ultimoFilho.previousSibling;
    }

    const ano = ultimoFilho.firstChild.nodeValue;

    const paragrafo = document.createElement("p");
    paragrafo.textContent = `Ano do último livro: ${ano}`;
    ultimoAnoDiv.appendChild(paragrafo);
  })
  .catch(error => {
    console.error("Erro ao carregar ou processar o XML:", error);
  });
