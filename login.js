function signup(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var user = {
        email: email,
        pass: pass,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    alert("Success");
}

function login(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user == null ){
        alert("Enter email or password");
    }else if(email = data.email && pass == data.pass){
        alert("Success");
        window.location.href = "coffee.html";
    }else{
        alert("Error")
    }

}


