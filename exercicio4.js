const primeiroAutorDiv = document.getElementById("primeiro_autor");

fetch("./livros.xml")
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const primeiroLivro = xmlDoc.getElementsByTagName("livro")[0];

    let elemento = primeiroLivro.firstChild;

    while (elemento.nodeType !== 1) {
      elemento = elemento.nextSibling;
    }

    let autorElemento = elemento.nextSibling;
    while (autorElemento && autorElemento.nodeName !== "autor") {
      autorElemento = autorElemento.nextSibling;
    }

    const nomeAutor = autorElemento.firstChild.nodeValue;

    const paragrafo = document.createElement("p");
    paragrafo.textContent = `Primeiro autor: ${nomeAutor}`;
    primeiroAutorDiv.appendChild(paragrafo);
  })
  .catch(error => {
    console.error("Erro ao carregar ou processar o XML:", error);
  });
