const estoque = [];

function atualizarTabela() {
  const tbody = document.querySelector("#estoque tbody");
  tbody.innerHTML = "";

  estoque.forEach((produto, index) => {
    const tr = document.createElement("tr");