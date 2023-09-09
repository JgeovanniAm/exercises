var btnRemove = document.querySelector('#btn');

btnRemove.addEventListener('click', () => {
    
    function remove() {
        return fetch(`http://localhost:5000/index`, { method: 'POST' })
            .then(res => res.json())
            .then(res => {
                console.log('Deleted:', res.message)
                return res
            })
            .catch(err => console.error(err))
    }
    remove()
        .then();
})