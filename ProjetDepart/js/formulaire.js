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
       <label for="number"> class="label" Quel est votre numéro de téléphone ?</label>
       <input type="tel" name="number" id="number" />
       </fieldset>

 
        <div class="label2">
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
       <input type="date" name="cardDate" id="cardDate" />
       </fieldset>
        </div>

   </fieldset>
 
   <fieldset>
       <legend></legend> <!-- Titre du fieldset -->
       <fieldset>
       <label for="chexkbox" class="label" >J’accepte les conditions générales de vente du site</label>
       <input type="checkbox" name="cardDate" id="cardDate" />
       </fieldset>
      
   </fieldset>
</form>
<input class="buttonSend" type="button" value="Finaliser la commannde">

`
divisionprincipale.style.cssText = "max-width : 500px; margin-left : 30%;"

let labell = document.body.querySelectorAll('.label');

// labell.style.cssText = "color : red; "










document.body.appendChild(divisionprincipale);