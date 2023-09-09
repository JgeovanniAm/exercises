async function API(url) {
    const base = 'http://localhost:5000';
    const response = await fetch(base + url);
    const data = await response.json();
    return data;
}
API(`/api/v1/cars/${0}`).then(RenderData);

const table = document.querySelector('.table');

function RenderData(data) {
    table.innerHTML = ""
    data.forEach(element => {
        const tr = document.createElement('tr');
        for (const item in element) {
            const td = document.createElement('td');
            td.innerText = element[item];
            tr.append(td);
            table.appendChild(tr)
        }
    });
}