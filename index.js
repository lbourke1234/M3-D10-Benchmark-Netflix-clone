
window.onload = () => {
    // getMovies()
    fillThriller()
    fillComedy()
    fillDrama()
    if (location.href === 'back.html'){
        removeDefaultFormSubmit()
    }
}

const getMovies = () => {
    fetch('https://striveschool-api.herokuapp.com/api/movies/horror', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U'        }
    })
    .then(res => res.json())
    .then(body => {
        // console.log(body)
    })
}

const removeDefaultFormSubmit = () => {
    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault()
    })
}



const postMovie = async () => {
    try{
    
        const myObject = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            imageUrl: document.getElementById('imageUrl').value
        }
        let response = await fetch('https://striveschool-api.herokuapp.com/api/movies', {
            method: 'POST',
            body: JSON.stringify(myObject),
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U',
                'Content-type': 'application/json'
            }
        })
    
    if (response.ok) {
        const body = await response.json()

        console.log(body)
        alert('Movie with ID: ' + body._id + ' added successfully')

    }
    
    console.log('last')
    } catch (err) {
        console.log(err)
    }
}

const updateMovies = () => {
    
}

const fillThriller = async () => {
    let row = document.getElementById('thriller-row')
    row.innerHTML = ''

    const response = await fetch('https://striveschool-api.herokuapp.com/api/movies/Thriller', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U'
        }
    })
    const body = await response.json()
    console.log(body)

    
    
    for (let i = 0; i < 6; i++) {
        row.innerHTML += `
                <div id="${body[i]._id}" class="col-sm-6 col-md-4 col-lg-2 px-1">
                  <img  class="d-block w-100 img-fluid" src="${body[i].imageUrl}" alt=" First slide" onclick='goToBack(${body})'>
                </div>
        `
    }

}

const fillComedy = async () => {
    let row = document.getElementById('comedy-row')
    row.innerHTML = ''

    const response = await fetch('https://striveschool-api.herokuapp.com/api/movies/Thriller', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U'
        }
    })
    const body = await response.json()
    console.log(body)

    
    
    for (let i = 0; i < 6; i++) {
        row.innerHTML += `
                <div class="col-sm-6 col-md-4 col-lg-2 px-1">
                  <img class="d-block w-100 img-fluid" src="${body[i].imageUrl}" alt=" First slide">
                </div>
        `
    }

}

const fillDrama = async () => {
    let row = document.getElementById('drama-row')
    row.innerHTML = ''

    const response = await fetch('https://striveschool-api.herokuapp.com/api/movies/Thriller', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U'
        }
    })
    const body = await response.json()
    console.log(body)

    
    
    for (let i = 0; i < 6; i++) {
        row.innerHTML += `
                <div class="col-sm-6 col-md-4 col-lg-2 px-1">
                  <img class="d-block w-100 img-fluid" src="${body[i].imageUrl}" alt=" First slide">
                </div>
        `
    }

}

const goToBack = (id) => {
    console.log('hello')
    // location.href = 'back.html' + id
}