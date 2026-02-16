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

const database = firebase.database()
function save(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var favorite_food = document.getElementById('favorite_food').value
    database.ref('users/' + username).set({
        email: email,
        password: password,
        username: username,
        favorite_food: favorite_food,
        
    })
    alert("saved the data in database")
}
function update(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    //var favorite_food = document.getElementById('favorite_food').value
var updates = {
    email: email,
    password: password,

}
database.ref('users/' + username).update(updates)
    alert("data has updated")
}
function get(){
    var username = document.getElementById('username').value
     var user_ref=database.ref('users/' + username)
     user_ref.on('value',function(
       snapshot) {
        var data = snapshot.val()
        alert(data.email)
        alert(data.password)
        alert(Number(data.email)+Number(data.password))
       })
         
}
function remove(){
    var username = document.getElementById('username').value
    database.ref('users/' + username).remove()
    alert("data has removed")
}