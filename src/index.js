const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector('input#searchByID');
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            const title = document.querySelector('section#movieDetails h4')
            const descr = document.querySelector('section#movieDetails p')
            title.innerHTML = data.title;
            descr.innerHTML = data.summary;
        })
        // log: (3)[{....}  {....}]
    })
}

document.addEventListener('DOMContentLoaded', init);