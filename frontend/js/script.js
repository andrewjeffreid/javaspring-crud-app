url = "http://localhost:8080/"

function getUsers() {  

    // GET request
    fetch(url + "users")
    .then((res) => res.json()
    ).then((data) => {
        document.getElementById("users").textContent = JSON.stringify(data)
    });
}

function postUser() {

    // receive input
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var occupation = document.getElementById("occupation").value;

    // data to POST
    data = {
            "firstName": firstName,
            "lastName": lastName,
            "age": age,
            "occupation": occupation
        }

    // POST request
    fetch(url + "save", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
    }).then((res) => {
        console.log("Request complete! response:", res);
    })

}

function putUser() {

    // receive input
    var id = document.getElementById("id").value;
    var firstName = document.getElementById("updateFirstName").value;
    var lastName = document.getElementById("updateLastName").value;
    var age = document.getElementById("updateAge").value;
    var occupation = document.getElementById("updateOccupation").value;

    // data to PUT
    data = {
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "occupation": occupation
    }

    // PUT 
    fetch(url + "update/" + id, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((res) => {
        console.log("Request complete! response:", res)
    })
}

function deleteUser() {

    // receive input
    var id = document.getElementById("deleteId").value;

    // DELETE
    fetch(url + "delete/" + id, {
        method: "DELETE"
    }).then((res) => {
        console.log("Request complete! response:", res)
    })
}