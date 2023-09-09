function RenderQuestion(data) {
  console.log(data)
  if (data == undefined) alert('no hay datos');
  else {
    PostNewQuestion(data)
    alert('se ha creado su nueva pregunta!')
    window.location.href = 'play.html';
  }
}

function PostNewQuestion(i) {
  return fetch('https://triviaserver.herokuapp.com/questions',
    {
      method: 'POST',
      body: JSON.stringify(i)

    })
    .then(response => {
      console.log(response.json);
      return response.json();
    })
    .then(json => {
      console.log(json);
    })
    .catch(err => {
      console.log(err);
    });
}