let urlParams = new URLSearchParams(window.location.search)

let formName = document.getElementById('name')
let description = document.getElementById('description')
let category = document.getElementById('category')
let imageUrl = document.getElementById('imageUrl')

window.onload = () => {
    if (urlParams.get('movieId')) {
        setUpEditInfo()
    }
    removeDefaultFormSubmit()

}

const setUpEditInfo = async () => {
    let id = urlParams.get('movieId')
    // console.log(id)
    let genre = urlParams.get('genre')
    // console.log(genre)

    let response = await fetch('https://striveschool-api.herokuapp.com/api/movies/' + genre, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U'
        }
    })
    let body = await response.json()
    // console.log(body)

    let movieToEdit = body.filter(movie => movie._id === id)
    // console.log(movieToEdit[0])
    let movie = movieToEdit[0]
    // console.log(body)

    

    // console.log(name.value)
    formName.value = movie.name
    description.value = movie.description
    category.value = movie.category
    imageUrl.value = movie.imageUrl

}

const updateMovie = async () => {

    let id = urlParams.get('movieId')

    const objectToUpdate = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        category: document.getElementById('category').value,
        imageUrl: document.getElementById('imageUrl').value
    }
    let response = await fetch('https://striveschool-api.herokuapp.com/api/movies/' + id, {
        method: 'PUT',
        body: JSON.stringify(objectToUpdate),
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U',
            'Content-type': 'application/json'
        }
    })
    let body = await response.json()
    alert('Successfully updated movie with ID: ' + id)
    // console.log(body)
    location.href = ('/')

}


const deleteMovie = async () => {
    let id = urlParams.get('movieId')

    let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/movies/' + id,
        {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U'
            }
        }
    )

    alert('successfully deleted movie with ID: ' + id)
    location.href = ('/')
}

// const removeDefaultFormSubmit = () => {
//     document.getElementById('form').addEventListener('submit', e => {
//         e.preventDefault()
//     })
// }