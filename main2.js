console.log("main js working")
var firebaseConfig = {
  apiKey: "AIzaSyATGHf_QTNkMxA0_FdZu8rGIBUV_gGVsV8",
  authDomain: "trial1-17777.firebaseapp.com",
  projectId: "trial1-17777",
  storageBucket: "trial1-17777.firebasestorage.app",
  messagingSenderId: "321262160614",
  appId: "1:321262160614:web:8f884e57b6e7de89c30927",
  measurementId: "G-56PXDZZ528"
};
firebase.initializeApp(firebaseConfig);

database= firebase.database()

function get(){
    var username = document.getElementById('username').value
     var user_ref=database.ref('users/' + username)
     user_ref.on('value',function(
       snapshot) {
        var data = snapshot.val()
        alert(data.email)
        alert(data.password)
        alert(Number(data.email) + Number(data.password))
       })
         
}
