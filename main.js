let subBtn = document.getElementById('submit-btn');
let ratingSpan = document.querySelector('.rating');
let rating = ratingSpan.getAttribute(['data-rating']);

    subBtn.addEventListener('click', subBtn => {
        let ratingMessage = document.getElementById('rating-message');
        ratingMessage.innerHTML = (`You selected ${rating} out of 5`);
        console.log(ratingMessage);
    })