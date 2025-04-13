const livroEspecificoDiv = document.getElementById("livro_especifico")

fetch("./livros.xml")
    .then(response => response.text())
    .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml")

        const livroEspecifico = xmlDoc.getElementsByTagName("livro")[0]
        const id = livroEspecifico.getAttribute("id").textContent
        const titulo = livroEspecifico.getElementsByTagName("titulo")[0].textContent
        const autor = livroEspecifico.getElementsByTagName("autor")[0].textContent
        const ano = livroEspecifico.getElementsByTagName("ano")[0].textContent

        const paragrafo = document.createElement("p")
        paragrafo.textContent = `Id: ${id} | Autor: ${autor} | Titulo: ${titulo} | Ano: ${ano}`
        livroEspecificoDiv.appendChild(paragrafo)

        
    })
.catch(error => {
        console.error("Erro ao carregar o XML:", error);
      });