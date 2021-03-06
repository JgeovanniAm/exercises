var btnRemove = document.querySelector('#btnRemove'),
    btnId = document.querySelector('.btnId');
btnRemove.addEventListener('click', () => {
    let id = btnId.value
    function remove(id) {
        return fetch(`http://localhost:3000/imagenes/id:${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(res => {
                console.log('Deleted:', res.message)
                return res
            })
            .catch(err => console.error(err))
    }
    remove(id)
        .then();
    window.location.href = "http://localhost:3000"
})