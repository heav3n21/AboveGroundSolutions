
const btnSubmit = document.querySelector('.btn')
let card = document.querySelector('.card-text')
let dogCard = document.querySelector('.cardDog')

dogCard.style.display = 'none'
btnSubmit.addEventListener('click', function () {
    const name = document.querySelector('.Name').value
    const hours = document.querySelector('.Hours').value
    const pay = document.querySelector('.Pay').value
    CP(hours, pay ,name )
})


function CP(hours, pay, name) {
    let money = hours * pay

    card.innerHTML =`${name} made $${money} this amount. `
   
    dogCard.style.display = 'flex'


}