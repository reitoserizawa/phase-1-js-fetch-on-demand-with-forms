const init = () => {
    const form = document.querySelector('form')
    
    form.addEventListener('submit', function (e) {
    e.preventDefault()
    const targetId = e.target.searchByID.value
    
    fetch(`http://localhost:3000/movies/${targetId}`)
    .then(data => data.json())
    .then(dataInside => {
        
    const h4 = document.querySelector('section#movieDetails h4')
    const p = document.querySelector('section#movieDetails p')

    h4.innerText = dataInside.title
    p.innerText = dataInside.summary

    form.reset()

    })


    })
}

document.addEventListener('DOMContentLoaded', init);

