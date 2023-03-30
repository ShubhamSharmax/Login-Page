function myFunction() {
    document.getElementById("Login").style.display ="none";
    document.getElementById("Signup").style.display ="flex";
}

function myFunction1() {
    document.getElementById("Signup").style.display ="none";
    document.getElementById("Login").style.display ="flex";
}

function showpass() {
    var x = document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password"
    }
}

function Login() {
    var name = document.getElementById("uname");
    
    alert("Logged In as"+ name.value)
}

function Signup(){
    var nm = document.getElementById("name");
    var un = document.getElementById("username");
    var pass = document.getElementById("npass");
    var pass1 = document.getElementById("cpass");

    if( pass.value != pass1.value)
    {
        alert("new Password Does not match with Confirm password")
    }
    else{
        alert("Hello "+ nm.value +" Successfully Registerd as "+ un.value)
    }
}