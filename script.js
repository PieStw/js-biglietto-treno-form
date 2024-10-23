function clear() {
    document.getElementById("nome").value = "";
    document.getElementById("distanza").value = "";
    document.getElementById("scelta").value = "Minorenne";
}

function createCard() {
    const nome = document.getElementById("nome");
    const distanza = document.getElementById("distanza");
    const scelta = document.getElementById("scelta");
    
    if (nome.value.trim() === "" || distanza.value.trim() === "") return;

    let prezzo = parseFloat(distanza.value) * 0.21;


    if (scelta.value === "Minorenne") {
        prezzo = prezzo - (prezzo * 0.20); 
    } else if (scelta.value === "Over 65") {
        prezzo = prezzo - (prezzo * 0.40); 
    }

    const card = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">NOME PASSEGGERO: ${nome.value}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Biglietto: ${scelta.value}</h6>
                        <p class="card-text">Prezzo: €${prezzo.toFixed(2)}</p>
                    </div>
                </div>`;


    document.getElementById("card-space").innerHTML += card;

    clear();
}

document.getElementById("primario").addEventListener("click", createCard);
document.getElementById("secondario").addEventListener("click", clear);
