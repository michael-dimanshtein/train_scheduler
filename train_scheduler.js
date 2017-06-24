$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyC_QQv_XiSlY3qLl5XsKiIt6xwf6LL29dE",
        authDomain: "train-scheduler-e1124.firebaseapp.com",
        databaseURL: "https://train-scheduler-e1124.firebaseio.com",
        projectId: "train-scheduler-e1124",
        storageBucket: "",
        messagingSenderId: "145894638207"
    };

    firebase.initializeApp(config);

    var snapshot = firebase.database();
    console.log(snapshot)

    // var x = "boston";
    // console.log(x);

    //init values
    var trainName = "";
    var trainDest = "";
    var timeDept = "";
    var frequency = "";

    //on submit click

    $("#add-train").on("click", function(event) {
        event.preventDefault();
        trainName = $("#train-name").val().trim();

        trainDest = $("#train-destination").val().trim();

        timeDept = $("#train-time").val().trim();

        frequency = $("#frequency").val().trim();

        console.log(trainName);
        console.log(trainDest);
        console.log(timeDept);
        console.log(frequency);

        snapshot.ref().push({
            trainName: trainName,
            trainDest: trainDest,
            timeDept: timeDept,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    });

    	snapshot.ref().on("child_added", function(childSnapshot){
    		console.log(childSnapshot.val().trainName);
    		console.log(childSnapshot.val().trainDest);
    		console.log(childSnapshot.val().trainDept);
    		console.log(childSnapshot.val().frequency);
    		
    		$("#name-return").append("<div>" +childSnapshot.val().trainName + ("<div>") + ("<br>"));
    		$("#destination-return").append("<div>" + childSnapshot.val().trainDest + ("<div>") +("<br>"));
    		$("#frequency-return").append("<div>" + childSnapshot.val().frequency + ("<div>") + ("<br>"));


    	});











});
