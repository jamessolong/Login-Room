function signIn(){
  var email = document.getElementById('emailtxt').value;
  var password = document.getElementById('passwordtxt').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error){
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorMessage === 'auth/wrong-password'){
          alert('worng password');
      }else{
          alert(errorMessage);
      }
      console.log(error);
  });
  alert('Logged in');
  goMain();

}

function goMain(){
  location.replace("mainStudent.html")
}