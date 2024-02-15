document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var campoA = parseFloat(document.getElementById("nbr-1").value);
    var campoB = parseFloat(document.getElementById("nbr-2").value);
    
    if (campoB > campoA) {
        document.getElementById("message").textContent = "Formulário válido! B é maior que A.";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Formulário inválido! B deve ser maior que A.";
        document.getElementById("message").style.color = "red";
    }
});