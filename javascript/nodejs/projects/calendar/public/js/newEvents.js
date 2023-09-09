function NewPostDate(dbs) {
    const dayInputPost = document.querySelector('.postDay');
    const monthInputPost = document.querySelector('.postMonth');
    const YearInputPost = document.querySelector('.postYear');
    const text = document.querySelector('.text');
    const btnNewDate = document.querySelector('.enviar');

    btnNewDate.addEventListener('click', function () {
        console.log(dbs)
        const element = dbs.find(x  => x.mes == monthInputPost.value);
        if(element){
            PostNewDate(
                {
                    object: element,
                    events: {
                        day: parseFloat(dayInputPost.value),
                        year: parseFloat(YearInputPost.value),
                        name: text.value
                    }
                }
            )
        }else{
            alert('invalido')
        }
    })

    function PostNewDate(i) {
        console.log(i)
        return fetch(`http://localhost:3000/newDate`,
            {
                method: 'POST',
                body: JSON.stringify(i),

            }).then(response => {
                console.log(response.json);
                return response.json();
            }).then(json => {
                console.log(json);
            }).catch(err => {
                console.log(err);
            });
    }
}