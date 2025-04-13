const autoresAnosDiv = document.getElementById("autores_anos");

fetch("./livros.xml")
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const livros = xmlDoc.getElementsByTagName("livro");

    for (let i = 0; i < livros.length; i++) {
      const livro = livros[i];
      let autor = "";
      let ano = "";

      // Percorre os filhos do <livro> para achar <autor> e <ano>
      for (let j = 0; j < livro.childNodes.length; j++) {
        const filho = livro.childNodes[j];

        if (filho.nodeName === "autor") {
          autor = filho.textContent.trim(); // trim() remove espaços indesejados
        }

        if (filho.nodeName === "ano") {
          ano = filho.textContent.trim();
        }
      }

      const infoElement = document.createElement("p");
      infoElement.textContent = `Autor: ${autor} | Ano: ${ano}`;
      autoresAnosDiv.appendChild(infoElement);
    }
  })
  .catch(error => {
    console.error("Erro ao carregar o XML:", error);
  });
