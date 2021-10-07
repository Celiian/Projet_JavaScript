let divisionprincipale = document.createElement('div');
divisionprincipale.className = 'main_class';

divisionprincipale.innerHTML =`
<form method="post" action="traitement.php">
 
   <fieldset>
       <legend>Vos coordonnées</legend> <!-- Titre du fieldset --> 
       <fieldset>
       <label for="nom" class="label">Quel est votre nom ?</label>
       <input type="text" name="nom" id="nom" />
       </fieldset>

       <fieldset>
       <label for="prenom" class="label" >Quel est votre prénom ?</label>
       <input type="text" name="prenom" id="prenom" />
       </fieldset>

       <fieldset>
       <label for="adresse" class="label" >Quel est votre adresse ?</label>
       <input type="text" name="adresse" id="adresse" />
       </fieldset>

       <fieldset>
       <label for="email" class="label" >Quel est votre e-mail ?</label>
       <input type="email" name="email" id="email" />
       </fieldset>

       <fieldset>
       <label for="number" class="label" >  Quel est votre numéro de téléphone ?</label>
       <input type="tel" name="number" id="number" />
       </fieldset>

 
        <fieldset>
        <label for="number" class="label" >Quel est votre numéro de carte bancaire ?</label>
       <input type="number" name="numberCard" id="numberCard" />
       </fieldset>
       <fieldset>
       <label for="number" class="label" >Quel est votre code de sécurité?</label>
       <input type="number" name="securityCard" id="seccurityCard" />
       </fieldset>
       <fieldset>
       <label for="date" class="label" >Quel est la date d'expiration de votre carte ?</label>
       <input class = "date" type="date" name="cardDate" id="cardDate" />
       </fieldset>
   </fieldset>
 
   <fieldset>
       <legend></legend> <!-- Titre du fieldset -->
       <fieldset>
       <label for="checkbox" class="checkbox" >J’accepte les conditions générales de vente du site</label>
       <input type="checkbox" name="checkbox" id="checkbox" checked />
       </fieldset>
   </fieldset>
</form>
<input class="buttonSend" type="button" value="Finaliser la commannde">

`
divisionprincipale.style.cssText = "max-width : 500px; margin-left : 30%;"


// labell.style.cssText = "color : red; "

document.body.appendChild(divisionprincipale);


let userInput = document.body.querySelectorAll('input');
let label = document.body.querySelectorAll('label');
let button = document.body.querySelector('.buttonSend');
let date = document.body.querySelector('.date');
let checkbox = document.body.querySelector('.checkbox');

button.addEventListener('click', function(){
    let j = 0;
    let dateContent = date.value;    
    for (let i = 0; i < userInput.length-2; i ++){
        let content = userInput[i].value;
    
        if (content != ''){
            j ++;
            console.log(j);
        }
    }

    if(j == 8 && date.value != ''){
        window.alert('La commande à été éffectué, vous pouvez fermer la page')
    }
    else{
        window.alert('Meci de renseigner tous les champs')
    }
})
