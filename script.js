const submitBtn = document.getElementById('submit')
const rateAgainBtn = document.getElementById('rate-again')
const mainContainer = document.querySelector('.main-container')
const thanksContainer = document.querySelector('.thankyou-container')
const rateBtn = document.querySelectorAll('.btn-rate')
const rating = document.getElementById('rating')

submitBtn.addEventListener('click', () => {
    if(rating.innerHTML > 0) {
        mainContainer.classList.add('hidden')
        thanksContainer.classList.remove('hidden')
    }
})

rateAgainBtn.addEventListener('click', () => {
    console.log('button clicked')
    thanksContainer.classList.add('hidden')
    mainContainer.classList.remove('hidden')
    rating.innerHTML = ''
})

rateBtn.forEach(rate => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
});

