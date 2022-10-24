(`use strict`);

const ratingNumbers = document.querySelectorAll(".rating-number");
const submitBtn = document.querySelector(".submit-btn");
const frontCard = document.querySelector(".card-front");
const backCard = document.querySelector(".thank-you");
const thankYou = document.querySelector(".ty-info");
const ratingChoice = document.querySelector(".rating-choice");

for (let i = 0; i < ratingNumbers.length; i++) {

    ratingNumbers[i].addEventListener('click', () => {

        let ratingSelected = ratingNumbers[i].innerHTML;

        for (let i = 0; i < ratingNumbers.length; i++) {
            ratingNumbers[i].classList.contains('active');
            ratingNumbers[i].classList.remove('active');
        }

        ratingNumbers[i].classList.add('active');

        submitBtn.addEventListener('click', () => {
            frontCard.style.display = 'none';
            backCard.style.display = 'block';
            ratingChoice.innerHTML = ratingSelected;
        })

    })

}



