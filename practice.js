
// ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
//  var firebaseConfig = {
//   apiKey: "AIzaSyClyDHb6VCmqfinZBMQwyvzzx3Zha6dZTM",
//   authDomain: "c94-prac.firebaseapp.com",
//   databaseURL: "https://c94-prac-default-rtdb.firebaseio.com",
//   projectId: "c94-prac",
//   storageBucket: "c94-prac.appspot.com",
//   messagingSenderId: "858179211450",
//   appId: "1:858179211450:web:fc37a92f6be84c4c80f283"
// };
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6hAxWiv8WCsL8S9HR9HCM7sjsSdXcs-I",
  authDomain: "test2-3e043.firebaseapp.com",
  databaseURL: "https://test2-3e043-default-rtdb.firebaseio.com",
  projectId: "test2-3e043",
  storageBucket: "test2-3e043.appspot.com",
  messagingSenderId: "634878779297",
  appId: "1:634878779297:web:8c54617cfd5e3103ee75e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

//ref-->where the value to be saved
//child-->name to be saveed under mail folder
// user_name--> name that is actually saved
//update it with the key-> "adding user"
