function login () {
    let username =document.getElementById("Username").value;

    let password =document.getElementById("password").value;

    let website_username="YOUR_USERNAME"
    let website_password="YOUR_PASSWORD"


    if( username == website_username && password == website_password ){

        window.location="index1.html"
    }
    else {
        alert ("Wrong Entry Invalid");
    }
  }