
const firebaseConfig = {
    apiKey: "AIzaSyALhtdaog90zscSvYOIQ6-Mmxu1cRY7Q3c",
    authDomain: "project-f16b9.firebaseapp.com",
    projectId: "project-f16b9",
    storageBucket: "project-f16b9.appspot.com",
    messagingSenderId: "69508191771",
    appId: "1:69508191771:web:2ea276200773cfe64f8abe",
    measurementId: "G-X2H64BVRD3",
    databaseURL: "https://project-f16b9-default-rtdb.firebaseio.com/"
  };

  const firebase = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebase);

  const auth = firebase.auth()
  const database = firebase.database()

  // REGISTER FUNCTION BELOW

  function register () 
  {
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    confirm_pass = document.getElementById("confirm").value
    full_name = document.getElementById("full_name").value


    auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      full_name : full_name,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}





  // Validate email address

  function validate_email(email) 
  {
    exp = /^[^@]+@\w+(\.\w+)+\w$/;
    if (exp.test(email)==true) {
        return true
    } else {
        return false
    }
  }

  function validate_password(password)
  {
    if (password < 6){
        return false
    } else {
        return true
    }
  }

  function validate_field(field)
  {
    if (field == null){
        return false
    }

    if(field.length <=0){
        return false
    } else{
        return true
    }
  }



let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let Namefield = document.getElementById("Namefield");
let Title = document.getElementById("Title");
let Passwordfield = document.getElementById("Passwordfield")

btn2.onclick = function(){
    Namefield.style.maxHeight = "0";
    Passwordfield.style.maxHeight = "0";
    Title.innerHTML = "Login";
    btn1.classList.add("disable");
    btn2.classList.remove("disable");
}

btn1.onclick = function(){
    Namefield.style.maxHeight = "60px";
    Passwordfield.style.maxHeight = "60px"
    Title.innerHTML = "Sign Up";
    btn1.classList.remove("disable");
    btn2.classList.add("disable");
}

