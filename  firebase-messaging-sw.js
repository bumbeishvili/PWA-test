importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');


// Initialize Firebase
var config = {
    apiKey: "AIzaSyB3hXsElgRq7kwOKGNwjJhwDTAbOKtAKdY",
    authDomain: "api-project-647608685250.firebaseapp.com",
    databaseURL: "https://api-project-647608685250.firebaseio.com",
    projectId: "api-project-647608685250",
    storageBucket: "api-project-647608685250.appspot.com",
    messagingSenderId: "647608685250"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});