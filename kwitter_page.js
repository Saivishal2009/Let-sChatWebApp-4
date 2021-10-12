// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAygdWqFtPhLv8AUjD_kWqqGpOr7RWuTOQ",
    authDomain: "lets-schatwebapp-2.firebaseapp.com",
    databaseURL: "https://lets-schatwebapp-2-default-rtdb.firebaseio.com",
    projectId: "lets-schatwebapp-2",
    storageBucket: "lets-schatwebapp-2.appspot.com",
    messagingSenderId: "1007652435261",
    appId: "1:1007652435261:web:08fdb495a9fccc62b50154"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 room_name = localStorage.getItem("Roomname");
 user_name = localStorage.getItem("Username");

 console.log("room name "+room_name);
 console.log("user name "+user_name);

 function logout() {
       localStorage.removeItem("Roomname");
       localStorage.removeItem("Username");
       window.location.replace("index.html");
 }
 function send() {
       msg = document.getElementById("msg").value;
       console.log("Message "+msg);
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0,
       });
       document.getElementById("msg").value = "";
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
   
//End code
   } });  }); }
getData();
