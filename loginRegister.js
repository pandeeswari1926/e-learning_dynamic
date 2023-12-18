var click1 = document.querySelector("#click");

click1.addEventListener("click", () => {
    var enteredEmail = document.getElementById("email").value;
    const email = localStorage.getItem("Useremail");

    const enteredPassword = document.getElementById("password").value;
    const password = localStorage.getItem("Password");

    if (enteredEmail == email && enteredPassword == password) {
        window.location.pathname = "index.html";
    }
    console.log(enteredEmail, enteredPassword, email, password);
});

// registration form
// email
var register1 = document.querySelector("#Registration");

function register() {
    const regexPattern = new RegExp(/^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i);
    var regemail = document.getElementById("email").value;
    debugger;
    if (regexPattern.test(regemail)) {
        document.getElementById("regerror").style.display = "none";
    } else {
        document.getElementById("regerror").style.display = "block";
        return;
    }

    var Regpassword = document.getElementById("password").value;
    var length1 = Regpassword.length;
    // email local

    // password
    localStorage.setItem("Useremail", regemail);
    console.log(localStorage.getItem("Useremail"));

    // if condition
    if (length1 >= 8 && length1 <= 10) {
        document.getElementById("regerror1").style.display = "none";
        localStorage.setItem("Password", Regpassword);
        console.log(localStorage.getItem("Password"));
    } else {
        document.getElementById("regerror1").style.display = "block";
        // password local
        return;
    }
    // var Regphone = document.getElementById("phone").value;
    // var length2 = Regphone.length;
    // if (length2 >= 10) {
    //     document.getElementById("regerror2").style.display = "none";
    //     localStorage.setItem("phone", Regphone);
    //     console.log(localStorage.getItem("phone"));
    // } else {
    //     document.getElementById("regerror2").style.display = "block";
    //     // password local
    //     return;
    // }
    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var phone = document.getElementById("phone");
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem("phoneno", phone.value);
    console.log(localStorage.getItem("fname"));
    console.log(localStorage.getItem("lname"));
    console.log(localStorage.getItem("phoneno"));

    window.location.pathname = "index.html";
}

// function login() {
//   var userUserName = document.getElementById("Email").value;
//   var userPassword = document.getElementById("password").value;
//   var username = localStorage.getItem("Useremail");
//   var password = localStorage.getItem("Password");

//   if (userUserName == username && userPassword == password)
//    console.log("ok");
// }