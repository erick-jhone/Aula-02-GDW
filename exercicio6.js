const navegacaoDiv = document.getElementById("navegacao");

fetch("./livros.xml")
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const segundoAutor = xmlDoc.getElementsByTagName("autor")[1];

    const livroPai = segundoAutor.parentNode;

    let tituloElemento = livroPai.firstChild;

    while (tituloElemento.nodeType !== 1) {
      tituloElemento = tituloElemento.nextSibling;
    }

    const titulo = tituloElemento.firstChild.nodeValue;

    const paragrafo = document.createElement("p");
    paragrafo.textContent = `Título do segundo livro: ${titulo}`;
    navegacaoDiv.appendChild(paragrafo);
  })
  .catch(error => {
    console.error("Erro ao processar o XML:", error);
  });
