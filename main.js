let subBtn = document.getElementById('submit-btn');
let ratingBtn = document.querySelector('.rating');
let rating = ratingBtn.dataset.value;
console.log(rating);

    subBtn.addEventListener('click', subBtn => {
        let ratingMessage = document.getElementById('rating-message');
        ratingMessage.innerHTML = (`You selected ${rating} out of 5`);
        console.log(ratingBtn);
    })