let btnEdit = document.querySelector('#sendEdit'),
    open = document.querySelector('.openEdit');
const form = document.querySelector(".editForm");

open.addEventListener('click', () => { form.style.display = "block" })

btnEdit.addEventListener('click', () => {
    form.style.display = "none";
    edit()
        .then()
    window.location.href = "http://localhost:5000"
})

const id = document.querySelector('.id'),
    models = document.querySelector('.Models'),
    color = document.querySelector('.color'),
    brand = document.querySelector('.brand'),
    age = document.querySelector('.Age');

function edit() {
    const data = {
        Models: models.value,
        Color: color.value,
        Brand: brand.value,
        Age: age.value,
        id: id.value
    }
    return fetch('http://localhost:5000/api/v1/cars/id:${id}', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(res => {
            console.log('Deleted:', res.message)
            return res
        })
        .catch(err => console.error(err))
}