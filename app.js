let users = [];
let userInStringForm = localStorage.getItem("users");
users = JSON.parse(userInStringForm) || [];
console.log(users);
function signup() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;


    let newUser = {
        user_firstname: name,
        user_email: email,
        user_password: pass,
        user_gender: gender,
        user_address: address,
        user_city: city,
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].user_email === email) {
            alert("Email already exists");
            return;
        }
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    window.location.href = "./login.html"
}

function login() {
    let login_email = document.getElementById('login_email').value;
    let login_password = document.getElementById('login_password').value;

    let isMatch = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].user_email === login_email) {

            if (users[i].user_password === login_password) {
                localStorage.setItem("logged in", JSON.stringify(users[i]))
                isMatch = true;
                window.location.href = "./home.html";
                break
            }
        }
    }

    if (!isMatch) {
        alert("your email or password is incorrect");
    }
    
    // function loggedinn(){
      
    //     for (let i = 0; i < users.length; i++){
    //         if(users[i].user_password === login_password){

    //             if(users[i].user_email === login_email){
    //                 window.location.href = "./home.html";
    //             }
    //         }
    //     }
    }
// let userInStringForm1 = localStorage.getItem("users");
// console.log(userInStringForm1)