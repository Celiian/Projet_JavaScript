let divCourseitem = document.querySelectorAll('.course__item');


 
let nouveauCours = document.createElement('div');
nouveauCours.className = 'course__item';
nouveauCours.innerHTML =`
  <figure class="course_img">
    <img src="img/angular.png">
  </figure>
  <div class="info__card">
    <h4>Angular Js</h4>
    <figure class="mark m_4">
      <img src="img/rates.png">
    </figure>
    <p>
      <span class="price">200 €</span>
      <span class="discount">9.99 €</span>
    </p>
    <p>
      Disponible: <span class="stock">10</span>
    </p>
    <a href="#" class="add-to-cart" data-id="5"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
  </div>
`

divCourseitem[4].parentNode.appendChild(nouveauCours);




let boutonPanier = document.querySelectorAll('.add-to-cart');
let nombreCours = document.querySelectorAll('.stock');
let divInfoCard = document.querySelectorAll('.info__card');
divCourseitem = document.querySelectorAll('.course__item');
let emptyCart = document.getElementById('empty-cart');
let mainDiv = document.querySelector('div .courses__container');
let notifBox = document.createElement('ul');
mainDiv.appendChild(notifBox);
notifBox.className = 'notification_container';


for(let i = 0; i < boutonPanier.length; i++){
  let lien = document.createElement('a');
  lien.className = 'supp-to-cart'; 
  lien.style.cssText = "background: red;padding: 5px 10px;border-radius: 6px;color: white;text-decoration: none;font-weight: bold;font-size: 0.8em;bottom: 0; max-width: 140px; margin-left : 10px;"
  lien.style.display = 'none';
  lien.id = i + "1";
  lien.innerHTML =`
  <i class="fa fa-cart-plus"></i>Supprimer du panier`
  divCourseitem[i].appendChild(lien);
}

let boutonSupp = document.querySelectorAll('.supp-to-cart');

emptyCart.addEventListener('click', function(event){
  let idElt = this.getAttribute('data-id');
  empty();
  notifEmpty();
})

function empty(){
  for(let i = 0; i < boutonPanier.length; i++){
    nombreCours[i].textContent = 10;
    boutonSupp[i].style.display = 'none';
  }
}

function notifEmpty(){
  
    window.alert('Le panier à été vidé');
  
}



for(let i = 0; i < boutonPanier.length; i++){
    boutonPanier[i].addEventListener('click', function(event) {
        ajouterAuPanier(i);
        if(parseInt(nombreCours[i].textContent) == 9 ){
       boutonSupp[i].style.display = 'block';
        }
    })
}
   



for(let i = 0; i < boutonSupp.length; i++){
  boutonSupp[i].addEventListener('click', function(event) {
    supprimerDuPanier(i);
    if(parseInt(nombreCours[i].textContent) == 10 ){
      boutonSupp[i].style.display = 'none';
    }
  })
}
 




// boutonSupp.addEventListener('click', function(event){
//     supprimerDuPanier();
// })



// for(let j = 0; j < boutonPanier.length; j++){
//     let index = (j + '1');
//     console.log(index);
//     console.log('test');
//     boutonSupp['index'].onclick = function() {
//         console.log('test');
//         let idElt = this.getAttribute('data-id');
//         supprimerDuPanier(j);
//     }
// }


function supprimerDuPanier(i){
  console.log('test2');
  if(parseInt(nombreCours[i].textContent) < 10) {
    nombreCours[i].textContent = (parseInt(nombreCours[i].textContent) + 1);
    notifRemove(i);
    setTimeout(function(){ notifDelete(); }, 3000);
  }
}


function ajouterAuPanier(i){
  if(parseInt(nombreCours[i].textContent) > 0) {
    nombreCours[i].textContent = (parseInt(nombreCours[i].textContent) - 1);
    notifAdd(i);
    setTimeout(function(){ notifDelete(); }, 3000);
  }
  if(parseInt(nombreCours[i].textContent) == 0) {
    let element = (divInfoCard[i].querySelector('h4').textContent);
    window.alert('Le cours ' + element + ' est en rupture de stock.');
  }
}


function notifAdd(i){
  console.log(`i = ${i}` );
  let para = document.createElement('li');
  notifBox.style.cssText = "display = flex; flex-direction : column; text-align: right ;"
  para.className = 'content';
  let element = (divInfoCard[i].querySelector('h4').textContent);
  para.innerHTML = (element + " à été ajouté au panier");
  notifBox.appendChild(para);
}


// let notifPlus = document.querySelector('.notification_container');
// notifPlus.className =  "notification_container";

// mainDiv.insertAdjacentHTML('afterend', '<div class="notification_container"><p>' + element + ' à été ajouté au panié </p></div>')



// notifPlus.setAttribute('style',' color : red');




function notifDelete(){
let deletNotifBox = mainDiv.querySelector('.content');
deletNotifBox.remove();
}



function notifRemove(i){
let para2 = document.createElement('li');
para2.className = 'content';
let element = (divInfoCard[i].querySelector('h4').textContent);
para2.innerHTML = (element + " à été supprimé du panier");


notifBox.appendChild(para2);
}




// setTimeout(function(){ notifAdd(i); }, 3000);
let fenetreForm;
let fenetreFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
  

let payement = document.createElement('button');

payement.innerHTML = 'Payer';
payement.className = 'bouttonPayer';
payement.style.cssText = 'margin-left : 45%'

document.body.appendChild(payement);

payement.addEventListener('click', function(even){
  window.open("payement.html", "CNN_WindowName", fenetreFeatures);
  console.log('fd');

})
