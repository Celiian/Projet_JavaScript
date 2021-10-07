let search = document.getElementById('search-item');
let input = search.querySelector('input');
divInfoCard = document.querySelectorAll('.info__card');
let element;



input.addEventListener('keyup', function(){
    comparaison();
})



function comparaison(){
    let recherche = input.value;
    for(let i = 0; i < recherche.length; i++){
    // console.log(recherche.charAt(i));

    element = (divInfoCard[i].querySelector('h4').textContent);
    console.log(element);


    }



}