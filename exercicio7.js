const idsDiv = document.getElementById("ids");

fetch("./livros.xml")
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const livros = xmlDoc.getElementsByTagName("livro");

    for (let i = 0; i < livros.length; i++) {
      const livro = livros[i];

      const atributoId = livro.getAttributeNode("id");

      const valorId = atributoId.nodeValue;

      const paragrafo = document.createElement("p");
      paragrafo.textContent = `ID do livro ${i + 1}: ${valorId}`;
      idsDiv.appendChild(paragrafo);
    }
  })
  .catch(error => {
    console.error("Erro ao carregar ou processar o XML:", error);
  });
