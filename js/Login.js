// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9TT-VttQrG2HWe8fHa_2TC9S7oe1EAuw",
    authDomain: "rubberlatex-business-web-db.firebaseapp.com",
    databaseURL: "https://rubberlatex-business-web-db-default-rtdb.firebaseio.com",
    projectId: "rubberlatex-business-web-db",
    storageBucket: "rubberlatex-business-web-db.appspot.com",
    messagingSenderId: "513606859120",
    appId: "1:513606859120:web:e9c5eca7beb3bf916cf7b5",
    measurementId: "G-E0X6YCZ0NW"
};
firebase.initializeApp(firebaseConfig);

// Create a new data
function createData() {
    const newData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        psw: document.getElementById("psw").value

    };

    firebase
        .database()
        .ref("pack/")
        .push(newData);
}

// Read data
firebase
    .database()
    .ref("pack/")
    .on("value", function (snapshot) {

        document.getElementById("showUsers").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            let addDiv = document.createElement('div');
            addDiv.className = "row";
            addDiv.innerHTML =
                '  <div class="col-sm-3" style="padding: 10px;    word-break: break-word;">' +
                childData.name +
                '</div><div class="col-sm-3" style="padding: 10px;    word-break: break-word;">' +
                childData.email +
                '</div><div class="col-sm-3" style="padding: 10px;">' + childData.psw +
                '</div> <div class="col-sm-3"> <button type="button"  class="btn btn-info" onclick="updateData()">Update</button><button type="button" class="btn btn-danger" onclick="deleteData()">Delete</button></div>';
            document.getElementById("showUsers").appendChild(addDiv);
        });

    });