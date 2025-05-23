// HTML Element Retrieval
const jsSec = document.getElementById("jsSec");

// JSON Data Retrieval
function sendFetch(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Creation Of Elements
            let divIntro = document.createElement("div");
            let h2NomEntreprise = document.createElement("h2");
            let h3Accroche = document.createElement("h3");
            let buttonReservation = document.createElement("a");
            let secActiviters = document.createElement("section");
            let secTemoigniage = document.createElement("section");
            let i = 0;

            // Link Child To Parrent
            jsSec.appendChild(divIntro);
            divIntro.appendChild(h2NomEntreprise);
            divIntro.appendChild(h3Accroche);
            divIntro.appendChild(buttonReservation);
            jsSec.appendChild(secActiviters);
            jsSec.appendChild(secTemoigniage);

            // Define Element Value
            divIntro.setAttribute("id","cssIntroDiv");
            h2NomEntreprise.textContent = data["nomCommercial"];
            h3Accroche.textContent = data["phraseAccroche"]
            buttonReservation.textContent = data["texteAppelAction"];
            buttonReservation.setAttribute("href", `https://jdudon.github.io/gallery/`);
            buttonReservation.setAttribute("id","falseButton");
            buttonReservation.setAttribute("target","_blank");
            secActiviters.setAttribute("id","secAct");
            secTemoigniage.setAttribute("id","secTem");
            

            // For Each Avantages Clients
            data["avantagesClients"].forEach(ac => {
            let pAvantangeClient = document.createElement("p");
            divIntro.appendChild(pAvantangeClient);
            pAvantangeClient.textContent = `- ${ac}`;
            });
            
            // For Each Activities
            data["activites"].forEach(activity => {
                // Create elements
                let divActiviter = document.createElement("div");
                let pNom = document.createElement("h2");
                let pDescription = document.createElement("p");
                let imgImage = document.createElement("img");
                // Link Child x Parent
                secActiviters.appendChild(divActiviter);
                divActiviter.appendChild(pNom);
                divActiviter.appendChild(pDescription);
                divActiviter.appendChild(imgImage);
                // Set Value
                divActiviter.setAttribute("id", `id${i}`);
                pNom.textContent = activity["nom"];
                pDescription.textContent = activity["description"];
                imgImage.setAttribute("src",`${activity["image-url"]}`);
                i++;
            });

            // For Each Temoigniage
              data["temoignages"].forEach(tem => {
                // Create elements
                let divTemoignages = document.createElement("div");
                let pUser = document.createElement("h3");
                let pExperience = document.createElement("p");
                let pComm = document.createElement("p");
                // let pRate = document.createElement("p");
                let starNum = [];
                // Link Child x Parent
                secTemoigniage.appendChild(divTemoignages);
                divTemoignages.appendChild(pUser);
                divTemoignages.appendChild(pExperience);
                divTemoignages.appendChild(pComm);
                // divTemoignages.appendChild(pRate);
                
                // Set Value
                pUser.textContent = tem["prenom"];
                pExperience.textContent = tem["typeExperience"];
                pComm.textContent = tem["commentaire"];
                // pRate.textContent = tem["note"];
                for (let rating = 0; rating < tem["note"]; rating++) {
                   starNum.push(rating);
                }
                starNum.forEach(element => {
                    let imgStar = document.createElement("img");
                    divTemoignages.appendChild(imgStar);
                    imgStar.setAttribute("src",`star_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png`);
                });
                
            });
    
        });
}

// Element Displayed
sendFetch(`https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json`);


// Tried to test code with another element of the JSON, turns out, you cant, because the objects name are diffrents.
// sendFetch(`https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json`);