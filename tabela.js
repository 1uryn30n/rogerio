function adicionarAluno() {
    var nomeInput = document.getElementById("nome");
    var notaInput = document.getElementById("nota");
    var tabela = document.getElementById("tabelaAlunos");

    var nome = nomeInput.value;
    var nota = parseFloat(notaInput.value);

    if (nome.trim() === "" || isNaN(nota)) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }

    var newRow = tabela.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = nome;
    cell2.innerHTML = nota.toFixed(2);

    nomeInput.value = "";
    notaInput.value = "";
}
function aplicarFiltro() {
    var filtroNomeInput = document.getElementById("filtroNome");
    var filtroNome = filtroNomeInput.value;
    var tabela = document.getElementById("tabelaAlunos");

    for (var i = 1; i < tabela.rows.length; i++) {
        var row = tabela.rows[i];
        var nome = row.cells[1].innerHTML;
        
        if (nome != filtroNome) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}