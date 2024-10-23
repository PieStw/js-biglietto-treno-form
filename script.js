function clear() {
    document.getElementById("nome").value = "";
    document.getElementById("distanza").value = "";
    document.getElementById("scelta").value = "Standard"; 
    document.getElementById("card-space").innerHTML = ""
    console.log("ciao");
}

function createCard() {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const distanza = document.getElementById("distanza");
    const scelta = document.getElementById("scelta");

    let prezzo = distanza.value * 0.21;

    if (scelta.value === "Minorenne") {
        prezzo -= prezzo * 0.20; 
    } else if (scelta.value === "Over 65") {
        prezzo -= prezzo * 0.40; 
    }

    // Create the card content
    const card = `
      <h1>IL TUO BIGLIETTO</h1>
      <div class="card">
        <h4 class="mt-4">DETTAGLIO PASSEGGERI</h4>
        <div class="row ticket">
          <div class="col-3">
            <h5>NOME PASSEGGERO</h5>
            <p>${nome.value}</p>
          </div>
          <div class="col-2">
            <h5>Offerta</h5>
            <p>${scelta.value}</p>
          </div>
          <div class="col-2">
            <h5>Carrozza</h5>
            <p>5</p>
          </div>
          <div class="col-2">
            <h5>Codice CP</h5>
            <p>92911</p>
          </div>
          <div class="col-2">
            <h5>Costo biglietto</h5>
            <p>${prezzo.toFixed(2)}€</p>
          </div>
        </div>
      </div>`;

    document.getElementById("card-space").innerHTML += card;
}

document.getElementById("genera").addEventListener("click", createCard);
document.getElementById("annulla").addEventListener("click", clear);
