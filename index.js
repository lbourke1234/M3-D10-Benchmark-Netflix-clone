
window.onload = () => {
    // getMovies()
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

const handleFormSubmit = async (e) => {
    try{
        e.preventDefault()
    
        console.log(e)
        const myObject = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            imageUrl: document.getElementById('imageUrl').value
        }
        console.log('before fetch')
        let response = await fetch('https://striveschool-api.herokuapp.com/api/movies', {
            method: 'POST',
            body: JSON.stringify(myObject),
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NDk4NTE2NzcsImV4cCI6MTY1MTA2MTI3N30.K2GETfU9WC5AqVtF5vXMgGcBW4A-AYjnC8rZPl53d_U',
                'Content-type': 'application/json'
            }
        })
    
    if (response.ok) {
        const body = response.json()

        console.log(body)
    }
    console.log('last')
    } catch (err) {
        console.log(err)
    }
}

const postMovie = (currentObjectValue) => {
    
}

const updateMovies = () => {
    
}