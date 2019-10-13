const form = document.airline

const firstname = form.firstName
const lastname = form.lastName
const age = form.ageNumber
const gender = form.gender
const diet = form.diet




form.addEventListener ("submit", function(e){
    e.preventDefault()
    const city = form.location
    let checkCity = []
    for (let i = 0; i < city.length; i++) {
        if (city[i].checked){
            checkCity.push(city[i].value)
        }
    }
    alert(`First Name: ${firstname.value}
Last Name: ${lastname.value}
Age: ${age.value}
Gender: ${gender.value}
Location: ${checkCity}
Diet: ${diet.value}` )

    console.log(city.value)
})

