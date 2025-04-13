const titulosDiv = document.getElementById("titulos");

fetch("./livros.xml")
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const titulos = xmlDoc.getElementsByTagName("titulo");

    for (let i = 0; i < titulos.length; i++) {
      const tituloElement = document.createElement("p");
      tituloElement.textContent = titulos[i].textContent;
      titulosDiv.appendChild(tituloElement);
    }
  })
  .catch(error => {
    console.error("Erro ao carregar o XML:", error);
  });
