function goLogin() {
    location.replace("login.html")
  }

  function checkempty(){
     if(document.getElementById('fnametxt').value==""){
         alert("กรุณาป้อนข้อมูลให้ครบถ้วน");
         document.getElementById('fnametxt').style.borderColor = "red";
         return false;
     }
     if(document.getElementById('lnametxt').value==""){
         alert("กรุณาป้อนข้อมูลให้ครบถ้วน");
         document.getElementById('lnametxt').style.borderColor = "red";
         return false;
     }
     if(document.getElementById('idtxt').value==""){
         alert("กรุณาป้อนข้อมูลให้ครบถ้วน");
         document.getElementById('idtxt').style.borderColor = "red";
         return false;
     }
     if(document.getElementById('emailtxt').value==""){
         alert("กรุณาป้อนข้อมูลให้ครบถ้วน");
         document.getElementById('emailtxt').style.borderColor = "red";
         return false;
     }
     
     if(document.getElementById('passwordtxt').value==""){
         alert("กรุณาป้อนข้อมูลให้ครบถ้วน");
         document.getElementById('passwordtxt').style.borderColor = "red";
         return false;
     }
     if(document.getElementById('repasswordtxt').value==""){
         alert("กรุณาป้อนข้อมูลให้ครบถ้วน");
         document.getElementById('repasswordtxt').style.borderColor = "red";
         return false;  
  }
  if(document.getElementById('passwordtxt').value != document.getElementById('repasswordtxt').value){
         alert("กรุณาตรวจสอบรหัสผ่านให้ตรงกัน");
         document.getElementById('repasswordtxt').style.borderColor = "red";
         return false;
     }
}

function saveData(){
var firstname = document.getElementById('fnametxt');
var lastname = document.getElementById('lnametxt');
var studentid = document.getElementById('idtxt');
var email = document.getElementById('emailtxt');
var password = document.getElementById('passwordtxt');
var repassword = document.getElementById('repasswordtxt');
insertData(fnametxt.value, lnametxt.value, idtxt.value,
emailtxt.value, passwordtxt.value, repasswordtxt.value)
}

function insertData(fnametxt,lnametxt,idtxt,emailtxt,passwordtxt,repasswordtxt){
var firebaseRef = firebase.database().ref("user");
firebaseRef.push({
 firstname: fnametxt,
 lastname: lnametxt,
 studentid: idtxt,
 email: emailtxt,
 password: passwordtxt,
 repassword: repasswordtxt
});
alert("Insert Success");
signUp();
}

function signUp(){
    var email = document.getElementById('emailtxt').value;
    var password = document.getElementById('passwordtxt').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorMessage === 'auth/weak-password'){
            alert('The password is too weak');
        }else{
            alert(errorMessage);
        }
        console.log(error);
    });
}




