function DELETE(dbs) {
    const dayInputUpdate = document.querySelector('.updateDay');
    const monthInputUpdate = document.querySelector('.updateMonth');
    const YearInputUpdate = document.querySelector('.updateYear');
    const text = document.querySelector('.updatetext');
    const btnUpdateEvent = document.querySelector('.update');

    btnUpdateEvent.addEventListener('click', () => {
        const element = dbs.find(x => x.mes == monthInputUpdate.value);
        let i = {
            object: element,
            events:
            {
                day: parseFloat(dayInputUpdate.value),
                year: parseFloat(YearInputUpdate.value),
                name: text.value
            }
        }
        function deleteitem(i) {
            return fetch(`http://localhost:3000/day=${i.events.day}&year=${i.events.year}&name=${i.events.name}&mes=${i.object.mes}`,
                { method: 'DELETE' })
                .then(res => res.json())
                .then(res => {
                    console.log('Deleted:', res.message)
                    return res
                })
                .catch(err => console.error(err))
        }
       
        if (element) {
            let item = element.events.find(x => x.day == i.events.day && x.year == i.events.year && i.events.name == x.name)
            if (item) {
                deleteitem(i)
                    .then();
            }
            else alert('No existe');
        } else alert('invalido');
    })
}