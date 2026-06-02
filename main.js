let subBtn = document.getElementById('submit-btn');
let closeBtn = document.getElementById('close-btn');
let ratingBtns = document.querySelectorAll('.rating');
let selectedRating = null;
let getShow = document.getElementById('thanks-card');
let getHidden = document.getElementById('rating-card');


    ratingBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            selectedRating = this.dataset.value;
        })
    })

    subBtn.addEventListener('click', () => {
        const showCard = getShow.querySelector('show');
        const hideCard = getHidden.querySelector('hidden');

        let ratingMessage = document.getElementById('rating-message');
        
        if (selectedRating) {
            ratingMessage.innerHTML = `You selected ${selectedRating} out of 5`;
        } else {
            ratingMessage.innerHTML = "Please select a rating first!";
        }
        
        getShow.classList.add('show');
        getHidden.classList.add('hidden');
    })

    closeBtn.addEventListener('click', () => {
        getShow.classList.remove('show');
        getHidden.classList.remove('hidden');
    })